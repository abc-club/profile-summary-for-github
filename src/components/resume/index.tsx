import React from 'react';
import { useQuery, } from '@apollo/react-hooks';
import { GETUSER } from '@/gql'
import { Row, Col, Card, Icon, Avatar, Tag, } from 'antd';
import moment from 'moment'
import Timeline from '../timeline'
import styles from './index.css';

interface IProps {
  username: string
}

const { Meta } = Card;
function Home(props: IProps) {
  const { loading, error, data } = useQuery(GETUSER(props.username));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { user } = data



  const repos = user.repositories.nodes.map((repo: any) => {
    return (
      <div key={repo.id}>
        <Row>
          <Col span={20}>
            <h3><a href={repo.url} target="_blank">{repo.name}</a> {repo.stargazers.totalCount} <Icon type="star" theme="filled" /></h3>
            {repo.primaryLanguage && <Tag color={repo.primaryLanguage.color} className={styles.tag}>{repo.primaryLanguage.name}</Tag>}
            <span>{repo.description}</span>
          </Col>
          <Col span={4}>{moment(repo.createdAt, "YYYYMMDD").fromNow()}</Col>
        </Row>
        <div>
          This repository has {repo.stargazers.totalCount} star and {repo.forkCount} fork. If you would like more information about this repository and my contributed code, please visit the repo on GitHub.
        </div>
        <hr/>
      </div>
    )
  })

  const followers = user.followers.nodes.map((item: any) => {
    return (
      <a key={item.id} href={item.url} target="_blank">
        <Avatar src={item.avatarUrl}/>
      </a>
    )
  })

  const following = user.following.nodes.map((item: any) => {
    return (
      <a key={item.id} href={item.url} target="_blank">
        <Avatar src={item.avatarUrl}/>
      </a>
    )
  })

  return (
    <div className={styles.container}>
      {/* userinfo */}
      <Row type="flex"  align="middle" justify="center">
        <Col span={4}>
          <Avatar src={user.avatarUrl} size={80}/>
        </Col>
        <Col span={20}>
          <a className={styles.name} href={user.url} target="_blank">{user.login}</a>
          <br/>
          <span className={styles.email}>{`${user.email} ${user.location?user.location:''}`}</span>
        </Col>
      </Row>
      <hr/>
      {/* profile */}
      <Row type="flex"  align="middle" justify="center">
        <Col span={4}>
          <h2 className={styles.title}>GitHub Profile</h2>
        </Col>
        <Col span={20}>
          <p className={styles.desc}>
            On GitHub since {moment(user.createdAt, "YYYYMMDD").fromNow()}, {user.login} is a developer with {user.repositories.totalCount} public repositories and {user.followers.totalCount} followers.
          </p>
        </Col>
      </Row>
      <hr/>
      {/* Languages */}
      <Row>
        <Col span={4}>
          <h2 className={styles.title}>Popular Repositories <span className={styles.desc}>({user.repositories.totalCount}repos)</span></h2>
        </Col>
        <Col span={20}>
          {repos}
          {user.repositories.totalCount>10&&<a className={styles.more} href={`https://github.com/${props.username}`}>get more >></a>}
        </Col>
      </Row>
      <hr/>
      {/* follower */}
      <Row type="flex"  align="middle" justify="center">
        <Col span={4}>
          <h2 className={styles.title}>Followers <span className={styles.desc}>({user.followers.totalCount} Followers)</span></h2>
        </Col>
        <Col span={20}>
          {followers}
        </Col>
      </Row>
      <hr/>
      {/* following */}
      <Row type="flex"  align="middle" justify="center">
        <Col span={4}>
          <h2 className={styles.title}>Following <span className={styles.desc}>({user.following.totalCount} Following)</span></h2>
        </Col>
        <Col span={20}>
          {following}
        </Col>
      </Row>
      <hr/>
      {/* Timeline */}
      <Timeline username={props.username}/>
    </div>
  )
}

export default Home
