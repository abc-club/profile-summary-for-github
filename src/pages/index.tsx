import React from 'react';
import { Input, Tag, Tooltip, Icon, Row, Col, message, } from 'antd';
import router from 'umi/router';
import Link from 'umi/link';

const { Search } = Input;

export interface HomeProps {

}

interface HomeStates {
  username: string
  token: string
}


class Home extends React.Component<HomeProps, HomeStates> {
  constructor(props: HomeProps) {
    super(props)
    this.state ={
      username: '',
      token: ''
    }
  }
  componentDidMount() {

  }

  onSearch = (username: string) => {
    if (!username || !this.state.token) {
      message.error('请输入token和username');
      return
    }
    router.push(`/users?username=${username}&token=${this.state.token}`)
  }

  onChange = (e: any) => {
    this.setState({
      token: e.target.value,
    })
  }

  setUsername = (username: string) => {
    this.setState({
      username,
    })
  }

  render() {
    const { username, token} = this.state
    return (
      <div>
        <Row style={{marginBottom: '10px'}}>
          <Col span={23}>
            <Input value={token} onChange={this.onChange} placeholder="input github token"/>
          </Col>
          <Col span={1}>
            <Tooltip title="token获取方式https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line">
              <Icon type="question-circle" style={{marginLeft: '10px', marginTop: '10px'}}/>
            </Tooltip>
          </Col>
        </Row>
        <Search placeholder="input username" value={username} onChange={e => this.setUsername(e.target.value)} onSearch={value => this.onSearch(value)} enterButton />
        <div style={{marginTop: '10px'}}>
          <Tag color="magenta" onClick={value => this.setUsername('aoping')}>aoping</Tag>
          <Tag color="magenta" onClick={value => this.setUsername('tj')}>TJ Holowaychuk</Tag>
          <Tag color="magenta" onClick={value => this.setUsername('yyx990803')}>Evan You</Tag>
        </div>
      </div>
    )
  }
}

export default Home
