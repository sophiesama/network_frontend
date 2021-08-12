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
    title: "HTTP请求均值",
    dataIndex: 'httpReq',
    key: 'httpReq',
  },
  {
    title: "TCP建连时延均值",
    dataIndex: 'tcpLat',
    key: 'tcpLat',
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
    name: '核心网交换机1',
    ipAddr: '192.168.0.100',
    httpReq: '12.46',
    tcpLat: '624',
    status: '正常'
  },
  {
    key: '2',
    name: '核心网交换机2',
    ipAddr: '192.168.0.101',
    httpReq: '0.24',
    tcpLat: '4568',
    status: '正常'
  },
  {
    key: '3',
    name: '核心网交换机3',
    ipAddr: '192.168.0.102',
    httpReq: '12.46',
    tcpLat: '624',
    status: '断线'
  },
  {
    key: '4',
    name: '主机节点1',
    ipAddr: '192.168.0.103',
    httpReq: '12.46',
    tcpLat: '624',
    status: '正常'
  },
  {
    key: '5',
    name: '主机节点2',
    ipAddr: '192.168.0.104',
    httpReq: '12.46',
    tcpLat: '624',
    status: '正常'
  },
]
const SimpleTable = () => {
  return (
    <Table dataSource={data} columns={columns}/>
  )
}
export default SimpleTable