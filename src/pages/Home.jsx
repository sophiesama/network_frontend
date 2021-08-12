import { Layout } from 'antd';
import { StyleSheet, css } from 'aphrodite';
import TopoGraph from '../components/TopoGraph'
import MySider from '../components/MySider'
import StatOverView from '../components/StatOverView';
const { Header, Content, Footer } = Layout;

export default function Home() {
  return (
    <Layout>
      <MySider/>
      <Layout>
        <Header className={css(styles.siteLayoutSubHeaderBackground)}>
        <StatOverView/></Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className={css(styles.siteLayOutBackground)}>
            <TopoGraph />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>数据服务实验室 ©2021</Footer>
      </Layout>
    </Layout>
  )
};

const styles = StyleSheet.create({
  logo: {
    height: '32px',
    margin: '16px',
    background: 'rgba(255, 255, 255, 0.2)'
  },

  siteLayoutSubHeaderBackground: {
    background: '#fff',
    margin: "0 16px 0 16px",
    textAlign: 'center'
  },

  siteLayOutBackground: {
    background: '#fff',
    padding: "24px",
    minHeight: 360
  }
});