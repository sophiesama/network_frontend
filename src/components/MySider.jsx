import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { HomeOutlined, DesktopOutlined } from '@ant-design/icons';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

export default function MySider() {
  const [collapsed, setCollapsed] = useState(0)
  return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={() => {
          setCollapsed(collapsed);
        }}
      >
        <div className={css(styles.logo)} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" >
              <Link to="/">
                  <HomeOutlined/>
                主页
              </Link>
          </Menu.Item>
          <Menu.Item key="2" >
              <Link to="/devices">
                <DesktopOutlined/>设备列表
              </Link>
          </Menu.Item>
        </Menu>
      </Sider>
  )
};

const styles = StyleSheet.create({
  logo: {
    height: '32px',
    margin: '16ox',
    background: 'rgba(255, 255, 255, 0.2)'
  }
});