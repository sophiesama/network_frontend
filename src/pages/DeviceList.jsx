import { Layout, Table, Tag } from 'antd';
import { StyleSheet, css } from 'aphrodite';
import MySider from '../components/MySider';
import { getRandomArbitrary } from '../utils/mathutils';
const { Header, Content, Footer } = Layout;
const columns = [
  {
    title: "系统",
    dataIndex: 'system',
    key: 'system',
  },
  {
    title: "IP地址",
    dataIndex: 'ipAddr',
    key: 'ipAddr',
  },
  {
    title: "描述",
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: "内存%",
    dataIndex: 'memory',
    key: 'memory',
    render: memory => {
      let color = memory < 60 ? '#0066CC':'#FF0033';
      return (
        <span style={{color:color}}>
          {memory}
        </span>
      )
    }
  },
  {
    title: "CPU%",
    dataIndex: 'cpu',
    key: 'cpu',
    render: memory => {
      let color = memory < 60 ? '#0066CC':'#FF0033';
      return (
        <span style={{color:color}}>
          {memory}
        </span>
      )
    }
  },
  {
    title: "磁盘%",
    dataIndex: 'disk',
    key: 'disk',
    render: memory => {
      let color = memory < 60 ? '#0066CC':'#FF0033';
      return (
        <span style={{color:color}}>
          {memory}
        </span>
      )
    }
  },
  {
    title: "CPU核数",
    dataIndex: 'cpuCores',
    key: 'cpuCores',
  },
  {
    title: "内存",
    dataIndex: 'memorySize',
    key: 'memorySize',
  },
  {
    title: "下行带宽",
    dataIndex: 'downBand',
    key: 'downBand',
  },
  {
    title: "上行带宽",
    dataIndex: 'upBand',
    key: 'upBand',
  },
  {
    title: "状态",
    dataIndex: 'status',
    key: 'status',
    render: status => {
      let color = status === "正常" ? 'geekblue':'volcano';
      return (
        <Tag color={color} key={status}>
          {status}
        </Tag>
      )
    }
  }
]

const data = [
  {
    key: '1',
    system: 'pica8',
    desc: 'SDN交换机',
    ipAddr: '192.168.0.100',
    memory: getRandomArbitrary(0,100),
    cpu: getRandomArbitrary(0,100),
    disk: getRandomArbitrary(0,20),
    cpuCores: 2,
    memorySize: '8G',
    downBand: getRandomArbitrary(0,100)+'Mb/s',
    upBand: getRandomArbitrary(0,10)+'Mb/s',
    status: '正常'
  },
  {
    key: '2',
    system: 'pica8',
    desc: 'SDN交换机',
    ipAddr: '192.168.0.101',
    memory: getRandomArbitrary(0,100),
    cpu: getRandomArbitrary(0,100),
    disk: getRandomArbitrary(0,20),
    cpuCores: 2,
    memorySize: '8G',
    downBand: getRandomArbitrary(0,100)+'Mb/s',
    upBand: getRandomArbitrary(0,10)+'Mb/s',
    status: '正常'
  },
  {
    key: '3',
    system: 'pica8',
    desc: 'SDN交换机',
    ipAddr: '192.168.0.102',
    memory: getRandomArbitrary(0,100),
    cpu: getRandomArbitrary(0,100),
    disk: getRandomArbitrary(0,20),
    cpuCores: 2,
    memorySize: '8G',
    downBand: getRandomArbitrary(0,100)+'Mb/s',
    upBand: getRandomArbitrary(0,10)+'Mb/s',
    status: '正常'
  },
  {
    key: '4',
    system: 'pica8',
    desc: 'SDN交换机',
    ipAddr: '192.168.0.103',
    memory: getRandomArbitrary(0,100),
    cpu: getRandomArbitrary(0,100),
    disk: getRandomArbitrary(0,20),
    cpuCores: 2,
    memorySize: '8G',
    downBand: getRandomArbitrary(0,100)+'Mb/s',
    upBand: getRandomArbitrary(0,10)+'Mb/s',
    status: '正常'
  },
  {
    key: '5',
    system: 'pica8',
    desc: 'SDN交换机',
    ipAddr: '192.168.0.104',
    memory: getRandomArbitrary(0,100),
    cpu: getRandomArbitrary(0,100),
    disk: getRandomArbitrary(0,20),
    cpuCores: 2,
    memorySize: '8G',
    downBand: getRandomArbitrary(0,100)+'Mb/s',
    upBand: getRandomArbitrary(0,10)+'Mb/s',
    status: '正常'
  },
  {
    key: '6',
    system: 'pica8',
    desc: 'SDN交换机',
    ipAddr: '192.168.0.105',
    memory: getRandomArbitrary(0,100),
    cpu: getRandomArbitrary(0,100),
    disk: getRandomArbitrary(0,20),
    cpuCores: 2,
    memorySize: '8G',
    downBand: getRandomArbitrary(0,100)+'Mb/s',
    upBand: getRandomArbitrary(0,10)+'Mb/s',
    status: '正常'
  },
  {
    key: '7',
    system: 'linux',
    desc: 'k8s-main',
    ipAddr: '10.0.0.25',
    memory: getRandomArbitrary(0,100),
    cpu: getRandomArbitrary(0,100),
    disk: getRandomArbitrary(0,20),
    cpuCores: 8,
    memorySize: '32G',
    downBand: getRandomArbitrary(0,100)+'Mb/s',
    upBand: getRandomArbitrary(0,10)+'Mb/s',
    status: '正常'
  },
  {
    key: '8',
    system: 'linux',
    desc: 'kube1',
    ipAddr: '10.0.0.94',
    memory: getRandomArbitrary(0,100),
    cpu: getRandomArbitrary(0,100),
    disk: getRandomArbitrary(0,20),
    cpuCores: 8,
    memorySize: '32G',
    downBand: getRandomArbitrary(0,100)+'Mb/s',
    upBand: getRandomArbitrary(0,10)+'Mb/s',
    status: '正常'
  },
  {
    key: '9',
    system: 'linux',
    desc: 'kube2',
    ipAddr: '10.0.0.114',
    memory: getRandomArbitrary(0,100),
    cpu: getRandomArbitrary(0,100),
    disk: getRandomArbitrary(0,20),
    cpuCores: 8,
    memorySize: '32G',
    downBand: getRandomArbitrary(0,100)+'Mb/s',
    upBand: getRandomArbitrary(0,10)+'Mb/s',
    status: '正常'
  },
  {
    key: '10',
    system: 'linux',
    desc: 'kube3',
    ipAddr: '10.0.0.125',
    memory: getRandomArbitrary(0,100),
    cpu: getRandomArbitrary(0,100),
    disk: getRandomArbitrary(0,20),
    cpuCores: 8,
    memorySize: '32G',
    downBand: getRandomArbitrary(0,100)+'Mb/s',
    upBand: getRandomArbitrary(0,10)+'Mb/s',
    status: '正常'
  },
]
const DeviceList = () => {
  return (
    <Layout>
      <MySider/>
      <Layout>
        <Header className={css(styles.siteLayoutSubHeaderBackground)}></Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className={css(styles.siteLayOutBackground)}>
            <Table bordered dataSource={data} columns={columns}/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>数据服务实验室 ©2021</Footer>
      </Layout>
    </Layout>
  )
}

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

export default DeviceList