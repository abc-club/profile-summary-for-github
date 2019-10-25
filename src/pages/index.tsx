import React from 'react';
import styles from './index.css';
import { connect } from "dva";
import { ConnectProps, ConnectState } from '@/models/connect';
import { Dispatch } from 'redux';
import Resume from '@/components/resume'
import { Input, Tag } from 'antd';
import router from 'umi/router';
import Link from 'umi/link';

const { Search } = Input;

export interface HomeProps extends ConnectProps {
  githubData: any;
  loading: boolean;
  dispatch: Dispatch;
}

interface HomeStates {
  username: string
}

@connect(({ loading, app }: ConnectState) => ({
  loading,
  githubData: app.githubData,
}))
class Home extends React.Component<HomeProps, HomeStates> {
  constructor(props: HomeProps) {
    super(props)
    this.state ={
      username: 'aoping'
    }
  }
  componentDidMount() {

    // this.props.dispatch({
    //   type: 'app/setGithubDataAction',
    //   user: this.state.username
    // });
    // this.props.dispatch({
    //   type: 'app/setCommitDataAction',
    //   user: 'aoping'
    // });
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
