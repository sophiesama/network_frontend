import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import { HELIIMAGE, GATEWAYIMAGE } from '../../constants/urls';
import { getRandomArbitrary, getRandomInt} from '../../utils/mathutils';
import DeviceModal from '../DeviceModal';
// import { connect } from 'react-redux';

const CoreNet = ({dynamic}) => {
  const container = useRef(null);

  const nodes = [
    { id: 1, image: HELIIMAGE, shape: "image", group: 1, size: 25 },
    { id: 2, image: HELIIMAGE, shape: "image", group: 1, size: 25 },
    { id: 3, image: HELIIMAGE, shape: "image", group: 1, size: 25 },
    { id: 4, image: HELIIMAGE, shape: "image", group: 2, size: 25 },
    { id: 5, image: HELIIMAGE, shape: "image", group: 2, size: 25 },
    { id: 6, image: HELIIMAGE, shape: "image", group: 2, size: 25 },
    { id: 7, image: GATEWAYIMAGE, shape: "image", group: 3, size: 25 }
  ];
  let edges = [];
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      if (i===j) continue
      if (getRandomArbitrary(0, 10) < 3.3) {
        edges.push({ from: i, to: j, label: getRandomArbitrary(10,100) + "Mb/s"})
      }
    }
  }
  edges.push({ from: 7, to: getRandomInt(1,7), label: getRandomArbitrary(10,100) + "Mb/s"})

  const options = {};
  const [nodeId, setNodeId ] = useState(0)
  const [isOpen, setIsOpen ] = useState(false)

  const closeModal = () => setIsOpen(false)
  const showModal = () => setIsOpen(true)
  
  //create network first time
  useEffect(() => {
    const network = container.current &&
    new Network(container.current, { nodes, edges }, options);
    network.on("selectNode", (params) => {
      setNodeId(params.nodes[0])
      console.log(params.nodes[0])
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
        showModal()
      });
    }, 1000);
    return () => clearInterval(interval)
  }, [dynamic])
  return (
  <div>
      <div ref={container} style={{ float: 'left', height: '500px', width: '100%', borderRight: 'dashed #CCCCFF' }} />
      <DeviceModal id={nodeId}
        type={nodeId===7?0:2} //attention here to be changed in the future
        isOpen={isOpen}
        onRequestClose={closeModal}
      />
  </div>
  );
};

export default CoreNet
