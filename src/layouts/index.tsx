import React from 'react';
import { Layout } from 'antd';
import styles from './index.css';

const { Header, Footer, Sider, Content } = Layout;


const BasicLayout: React.FC = props => {
  return (
    <Layout className={styles.body}>
        <Header className={styles.header}>
          <a className={styles.action} href="https://juejin.im/user/5b534e595188251b3950de48/posts" target="_blank">掘金</a>
          <a className={styles.action} href="https://github.com/aoping" target="_blank">作者</a>
          <a className={styles.action} href="https://github.com/abc-club/profile-summary-for-github" target="_blank">项目地址</a>
        </Header>
        <Content className={styles.content}>
          <div className={styles.inner}>
            {props.children}
          </div>
        </Content>
        <Footer className={styles.footer}>
        GitHub profile summary is built with <a href="https://umijs.org/zh/">umi</a> <small>(kotlin web framework)
              </small> and <a href="https://bizcharts.net/index" target="_blank">bizcharts</a> <small>(visualization)</small>.
            Source is on <a href="https://github.com/abc-club/profile-summary-for-github" target="_blank">GitHub</a>.
        </Footer>
      </Layout>
  );
};

export default BasicLayout;
