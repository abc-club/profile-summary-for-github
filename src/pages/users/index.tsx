import React from 'react';
import styles from './index.css';
import { connect } from "dva";
import { ConnectProps, ConnectState } from '@/models/connect';
import { Dispatch } from 'redux';
import Resume from '@/components/resume'

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
      username: ''
    }
  }
  componentDidMount() {
    let { query: { username}} = (this.props.location as any)
    this.setState({
      username
    })
    // this.props.dispatch({
    //   type: 'app/setGithubDataAction',
    //   user: this.state.username
    // });
    this.props.dispatch({
      type: 'app/setCommitDataAction',
      user: 'aoping'
    });
  }

  render() {
    return (
      <div>
        <Resume username={this.state.username}/>
      </div>
    )
  }
}

export default Home
