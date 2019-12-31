import React, { useState } from 'react';

import { Layout } from 'antd';
import styles from './index.css';
import html2canvas from 'html2canvas';
const { Header, Footer, Sider, Content } = Layout;

const BasicLayout: React.FC = props => {
  const [downBtnText, setDownBtnText] = useState('保存图片');

  const myRef: any = React.createRef();
  const img = require('@/assets/qrcode.png')

  function saveImg() {
    if (downBtnText === '保存中...') return
    setDownBtnText('保存中...')
    html2canvas(myRef.current).then(function(canvas) {
      var imgName = "cs.jpg";
      var dataUrl = canvas.toDataURL('image/jpeg', 1.0);
      dataURIToBlob(imgName, dataUrl, saveFile);
    });
  }

  var dataURIToBlob =  function(imgName: string, dataURI: any, callback: any) {
    var binStr = atob(dataURI.split(',')[1]),
        len = binStr.length,
        arr = new Uint8Array(len);

    for (var i = 0; i < len; i++) {
        arr[i] = binStr.charCodeAt(i);
    }

    callback(imgName, new Blob([arr]));
  }

  var saveFile = function(filename: any, blob: any){
    var save_link: any = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    save_link.href = URL.createObjectURL(blob);
    save_link.download = filename;

    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    save_link.dispatchEvent(event);
    setDownBtnText('保存图片')
  }

  return (
    <Layout className={styles.body}>
        <Header className={styles.header}>
          <a className={styles.action} href="https://juejin.im/user/5b534e595188251b3950de48/posts" target="_blank">掘金</a>
          <a className={styles.action} href="https://github.com/aoping" target="_blank">作者</a>
          <a className={styles.action} href="https://github.com/abc-club/profile-summary-for-github" target="_blank">项目地址</a>
          <div className={styles.action} onClick={saveImg}>{downBtnText}</div>
        </Header>
        <Content className={styles.content}>
          <div ref={myRef} className={styles.inner}>
            {props.children}
            <div className={styles.qrcodeWrap}>
              <img className={styles.qrcode} src={img}/>
            </div>
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
