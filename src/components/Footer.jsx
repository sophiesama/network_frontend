import React from 'react';
import { Layout } from 'antd';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  copyright: {
    textAlign: 'center',
    color: 'gray',
    backgroundColor: 'white',
    fontSize: 'small',
  },
});

const { Footer } = Layout;

const PageFooter = () => (
  <Footer className={css(styles.copyright)}>
    Copyright © 2021 数据服务实验室.
  </Footer>
);

export default PageFooter;
