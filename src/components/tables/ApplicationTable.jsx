import { getRandomArbitrary } from "../../utils/mathutils";
import { Table, Tag } from "antd";
const columns = [
  {
    title: "节点名称",
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: "IP地址",
    dataIndex: 'ipAddr',
    key: 'ipAddr',
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
    name: 'k8s-main',
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
    key: '2',
    name: 'kube1',
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
  {
    key: '3',
    name: 'kube2',
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
  {
    key: '4',
    name: 'kube3',
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
const ApplicationTable = () => {
  return (
    <Table dataSource={data} columns={columns}/>
  )
}
export default ApplicationTable