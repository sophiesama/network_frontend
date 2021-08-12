import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import { HUBIMAGE, SERVERIMAGE } from '../constants/urls';
import { getRandomArbitrary } from '../utils/mathutils';
import { Row, Col, Switch } from 'antd';
import DeviceModal from './DeviceModal';
import SimpleTable from './SimpleTable';
import NetSelector from './NetSelector';
// import { connect } from 'react-redux';

const TopoGraph = () => {
  const container = useRef(null);

  const nodes = [
    { id: 1, label: '192.168.0.100', image: HUBIMAGE, shape: "image", group: 1, x: 200, y: 0, size: 50 },
    { id: 2, label: '192.168.0.101', image: HUBIMAGE, shape: "image", group: 1, x: 100, y: 200, size: 50 },
    { id: 3, label: '192.168.0.102', image: HUBIMAGE, shape: "image", group: 1, x: 300, y: 200, size: 50 },
    { id: 4, label: '192.168.0.103', image: SERVERIMAGE, shape: "image", group: 2, x: 0, y: 400, size: 50  },
    { id: 5, label: '192.168.0.104', image: SERVERIMAGE, shape: "image", group: 2, x: 200, y: 400, size: 50  },
    { id: 6, label: '192.168.0.105', image: SERVERIMAGE, shape: "image", group: 2, x: 400, y: 400, size: 50  }
  ];
  let edges = [
    { from: 1, to: 2, label: getRandomArbitrary(900,1100) + "Mb/s" },
    // { from: 2, to: 3, label: getRandomArbitrary(900,1100) + "Mb/s" },
    // { from: 3, to: 1, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 2, to: 4, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 2, to: 5, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 2, to: 6, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 1, to: 4, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 1, to: 5, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 1, to: 6, label: getRandomArbitrary(900,1100) + "Mb/s" },
  ];

  const options = {physics: false};
  const [nodeId, setNodeId ] = useState(0)
  const [isOpen, setIsOpen ] = useState(false)
  const [dynamic, setDynamic ] = useState(false)
  const [netType, setNetType ] = useState(1)

  const closeModal = () => setIsOpen(false)
  const showModal = () => setIsOpen(true)
  const switchChange = () => setDynamic(!dynamic)
  const netTypeChange = e => {setNetType(e.target.value)}
  
  //create network first time
  useEffect(() => {
    const network =
      container.current &&
      new Network(container.current, { nodes, edges }, options);
    network.on("selectNode", (params) => {
      setNodeId(params.nodes[0])
      console.log(params.nodes[0])
      console.log(nodeId)
      showModal()
    });
  }, []);

  //dynamic transmitt speed change
  useEffect(() => {
    if (!dynamic) return false 
    const interval = setInterval(() => {
      console.log("interval test")
      edges = edges.map((item)=>{
        item.label = getRandomArbitrary(900,1100) + "Mb/s"
        return item
      })
      const network =
      container.current &&
      new Network(container.current, { nodes, edges }, options);
      network.on("selectNode", (params) => {
        setNodeId(params.nodes[0])
        console.log(params.nodes[0])
        console.log(nodeId)
        showModal()
      });
    }, 1000);
    return () => clearInterval(interval)
  }, [dynamic])
  return (
  <div>
    <Row gutter={24}>
      <Col span={12}>
        <Row gutter={24}>
          <Col span={12}>动态<Switch onChange={switchChange}/></Col>
          <Col span={9}><NetSelector netType={netType} selectLabel={netTypeChange}/></Col>
          {/* <Col span={3}><Button type="primary" shape="round">核心网</Button></Col>
          <Col span={3}><Button type="primary" shape="round">应用网</Button></Col>
          <Col span={3}><Button type="primary" shape="round">自组网</Button></Col> */}
          <Col span={24}>
            <div ref={container} style={{ float: 'left', height: '500px', width: '100%', borderRight: 'dashed #CCCCFF' }} />
          </Col>
        </Row>
      </Col>
      <Col span={12}><SimpleTable/></Col>
      <DeviceModal id={nodeId}
        isOpen={isOpen}
        onRequestClose={closeModal}
      />
    </Row>
  </div>
  );
};

export default TopoGraph
