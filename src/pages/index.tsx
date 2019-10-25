import React from 'react';
import { Input, Tag } from 'antd';
import router from 'umi/router';
import Link from 'umi/link';

const { Search } = Input;

export interface HomeProps {

}

interface HomeStates {
}


class Home extends React.Component<HomeProps, HomeStates> {
  constructor(props: HomeProps) {
    super(props)
    this.state ={
      username: 'aoping'
    }
  }
  componentDidMount() {

  }

  onSearch = (username: string) => {
    router.push('/users?username=' + username)
  }

  render() {
    return (
      <div>
        <Search placeholder="input username" onSearch={value => this.onSearch(value)} enterButton />
        <div style={{marginTop: '10px'}}>
          <Link to="/users?username=aoping"><Tag color="magenta">aoping</Tag></Link>
          <Link to="/users?username=tj"><Tag color="magenta">TJ Holowaychuk</Tag></Link>
          <Link to="/users?username=yyx990803"><Tag color="magenta">Evan You</Tag></Link>
        </div>
      </div>
    )
  }
}

export default Home
