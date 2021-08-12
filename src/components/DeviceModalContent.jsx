import { css, StyleSheet } from "aphrodite";
import { Statistic, Row, Col } from "antd";
import { useState } from "react";
import { getRandomBytes } from "../utils/mathutils";

const SwitchCard = () => {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Statistic title="设备名称" value={'AUMOX SG518P'} />
      </Col>
      <Col span={24}>
        <Statistic title="工作端口数/端口总数" value={'4/18'} />
      </Col>
      <Col span={24}>
        <Statistic title="总收包数（字节）" value={getRandomBytes(8)} />
      </Col>
      <Col span={24}>
        <Statistic title="总发包数（字节）" value={getRandomBytes(7)} />
      </Col>
      <Col span={24}>
        <Statistic title="丢包率" value={'0.23%'} />
      </Col>
    </Row>
  )
}

const ServerCard = () => {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Statistic title="设备名称" value={'AUMOX SG518P'} />
      </Col>
      <Col span={24}>
        <Statistic title="工作端口数/端口总数" value={'4/18'} />
      </Col>
      <Col span={24}>
        <Statistic title="总收包数（字节）" value={getRandomBytes(8)} />
      </Col>
      <Col span={24}>
        <Statistic title="总发包数（字节）" value={getRandomBytes(7)} />
      </Col>
      <Col span={24}>
        <Statistic title="丢包率" value={'0.23%'} />
      </Col>
    </Row>
  )
}

const PortCard = ({portNum}) => {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Statistic title="端口号" value={portNum} />
      </Col>
      <Col span={24}>
        <Statistic title="收包数（字节）" value={getRandomBytes(7)} />
      </Col>
      <Col span={24}>
        <Statistic title="发包数（字节）" value={getRandomBytes(6)} />
      </Col>
      <Col span={24}>
        <Statistic title="丢包率" value={'0.13%'} />
      </Col>
    </Row>
  )
}

const DeviceModalContent = ({ id }) => {
  const [cardType, setCardType] = useState(0)
  const [portNum, setPortNum] = useState(1)
  return (
    <div style={{ minHeight: '480px', width: '640px'}}>
      <img onClick={()=>{setCardType(0)}} alt="" src="https://m.media-amazon.com/images/I/61TN5rBan9L._AC_SL1500_.jpg" style={{ width:'640px' }}/>
      <div className={css(styles.port1)} onClick={()=>{setCardType(2); setPortNum(1)}}/>
      <div className={css(styles.port2)} onClick={()=>{setCardType(2); setPortNum(2)}}/>
      <div className={css(styles.port3)} onClick={()=>{setCardType(2); setPortNum(3)}}/>
      <div className={css(styles.port6)} onClick={()=>{setCardType(2); setPortNum(6)}}/>
      {cardType === 0?<SwitchCard/>:null}
      {cardType === 1?<ServerCard/>:null}
      {cardType === 2?<PortCard portNum={portNum}/>:null}
    </div>
  )
};

const styles = StyleSheet.create({
  port1: {
    position: 'absolute',
    left: '240px',
    top: '115px',
    width: '34px',
    height: '30px',
    border: 'solid green'
  },
  port2: {
    position: 'absolute',
    left: '240px',
    top: '146px',
    width: '34px',
    height: '30px',
    border: 'solid green'
  },
  port3: {
    position: 'absolute',
    left: '274px',
    top: '115px',
    width: '34px',
    height: '30px',
    border: 'solid green'
  },
  port6: {
    position: 'absolute',
    left: '307px',
    top: '146px',
    width: '34px',
    height: '30px',
    border: 'solid green'
  }
})

export default DeviceModalContent