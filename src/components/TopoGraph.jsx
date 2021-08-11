import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import { HUBIMAGE, SERVERIMAGE } from '../constants/urls';
import DeviceModal from './DeviceModal';
import { getRandomArbitrary } from '../utils/mathutils';
// import { connect } from 'react-redux';

const TopoGraph = () => {
  const container = useRef(null);

  const nodes = [
    { id: 1, label: '192.168.0.100', image: HUBIMAGE, shape: "image", group: 1, x: 200, y: 0, size: 50 },
    { id: 2, label: '192.168.0.101', image: HUBIMAGE, shape: "image", group: 1, x: 300, y: 200, size: 50 },
    { id: 3, label: '192.168.0.102', image: HUBIMAGE, shape: "image", group: 1, x: 100, y: 200, size: 50 },
    { id: 4, label: '192.168.0.103', image: SERVERIMAGE, shape: "image", group: 2, x: 0, y: 400, size: 50  },
    { id: 5, label: '192.168.0.104', image: SERVERIMAGE, shape: "image", group: 2, x: 200, y: 400, size: 50  },
    { id: 6, label: '192.168.0.105', image: SERVERIMAGE, shape: "image", group: 2, x: 400, y: 400, size: 50  }
  ];
  let edges = [
    { from: 1, to: 2, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 2, to: 3, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 3, to: 1, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 2, to: 4, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 2, to: 5, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 2, to: 6, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 3, to: 4, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 3, to: 5, label: getRandomArbitrary(900,1100) + "Mb/s" },
    { from: 3, to: 6, label: getRandomArbitrary(900,1100) + "Mb/s" },
  ];

  const options = {physics: false};
  const [nodeId, setNodeId ] = useState(0)
  const [isOpen, setIsOpen ] = useState(false)

  const closeModal = () => setIsOpen(false)
  const showModal = () => setIsOpen(true)
  
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
  }, [edges]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("interval test")
  //     edges = edges.map((item)=>{
  //       item.label = getRandomArbitrary(900,1100) + "Mb/s"
  //       return item
  //     })
  //     const network =
  //     container.current &&
  //     new Network(container.current, { nodes, edges }, options);
  //     console.log(network)
  //   }, 1000);
  //   return () => clearInterval(interval)
  // }, [])

  return (
  <div>
    <div ref={container} style={{ height: '500px', width: '100%' }} />
    <DeviceModal id={nodeId}
      isOpen={isOpen}
      onRequestClose={closeModal}
    />
  </div>
  );
};

export default TopoGraph
