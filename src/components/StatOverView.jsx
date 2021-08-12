import { Statistic, Row, Col } from "antd";
// import { getRandomBytes } from "../utils/mathutils";
const StatOverView = () => {
  return (
    <Row gutter={24}>
      <Col span={6}>
        <Statistic title="监控主机" value={'3/11'} valueStyle={{fontSize: '16px'}}/>
      </Col>
      <Col span={6}>
        <Statistic title="监控交换机" value={'3/6'} valueStyle={{fontSize: '16px'}}/>
      </Col>
      <Col span={6}>
        <Statistic title="监控端口" value={'12/144'} valueStyle={{fontSize: '16px'}}/>
      </Col>
      <Col span={6}>
        <Statistic title="数据平面" value={3} valueStyle={{fontSize: '16px'}}/>
      </Col>
    </Row>
  )
}

export default StatOverView