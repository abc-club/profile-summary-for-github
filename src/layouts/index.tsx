import React from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, useQuery, } from '@apollo/react-hooks';
import { Layout } from 'antd';
import styles from './index.css';

const { Header, Footer, Sider, Content } = Layout;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: "bearer fa3ce34c7170e7fbfe7e5cb01220e851f610b164"
  }
});

const BasicLayout: React.FC = props => {
  return (
    <ApolloProvider client={client}>
      <Layout className={styles.body}>
        <Header className={styles.header}>
          <a className={styles.action} href="https://github.com/aoping" target="_blank">项目地址</a>
          <a className={styles.action} href="https://juejin.im/user/5b534e595188251b3950de48/posts" target="_blank">掘金</a>
        </Header>
        <Content className={styles.content}>
          <div className={styles.inner}>
            {props.children}
          </div>
        </Content>
        <Footer className={styles.footer}>
        GitHub profile summary is built with <a href="https://umijs.org/zh/">umi</a> <small>(kotlin web framework)
              </small> and <a href="https://bizcharts.net/index" target="_blank">bizcharts</a> <small>(visualization)</small>.
            Source is on <a href="https://github.com/tipsy/profile-summary-for-github" target="_blank">GitHub</a>.
        </Footer>
      </Layout>
    </ApolloProvider>
  );
};

export default BasicLayout;
