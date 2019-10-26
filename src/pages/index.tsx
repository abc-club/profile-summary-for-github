import React from 'react';
import { Input, Tag, Tooltip, Icon, Row, Col, } from 'antd';
import router from 'umi/router';
import Link from 'umi/link';

const { Search } = Input;

export interface HomeProps {

}

interface HomeStates {
  token: string
}


class Home extends React.Component<HomeProps, HomeStates> {
  constructor(props: HomeProps) {
    super(props)
    this.state ={
      token: '3aac9f1e2be13a1b740e354c9ed24c9935396b4f'
    }
  }
  componentDidMount() {

  }

  onSearch = (username: string) => {
    router.push(`/users?username=${username}&token=${this.state.token}`)
  }

  onChange = (e: any) => {
    this.setState({
      token: e.target.value,
    })
  }

  render() {
    const {token} = this.state
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
        <Search placeholder="input username" onSearch={value => this.onSearch(value)} enterButton />
        <div style={{marginTop: '10px'}}>
          <Link to={`/users?username=aoping&token=${token}`}><Tag color="magenta">aoping</Tag></Link>
          <Link to={`/users?username=tj&token=${token}`}><Tag color="magenta">TJ Holowaychuk</Tag></Link>
          <Link to={`/users?username=yyx990803&token=${token}`}><Tag color="magenta">Evan You</Tag></Link>
        </div>
      </div>
    )
  }
}

export default Home
