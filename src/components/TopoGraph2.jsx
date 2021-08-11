import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import { HUBIMAGE, SERVERIMAGE } from '../constants/urls';
import DeviceModal from './DeviceModal';
// import { connect } from 'react-redux';

const TopoGraph2 = ({ modalIsOpen, showDeviceModal, hideDeviceModal }) => {
  const container = useRef(null);

  const nodes = [
    { id: 1, label: '192.168.0.100', image: HUBIMAGE, shape: "image", group: 1, x: 200, y: 0, size: 50 },
    { id: 2, label: '192.168.0.101', image: HUBIMAGE, shape: "image", group: 1, x: 300, y: 200, size: 50 },
    { id: 3, label: '192.168.0.102', image: HUBIMAGE, shape: "image", group: 1, x: 100, y: 200, size: 50 },
    { id: 4, label: '192.168.0.103', image: SERVERIMAGE, shape: "image", group: 2, x: 0, y: 400, size: 50  },
    { id: 5, label: '192.168.0.104', image: SERVERIMAGE, shape: "image", group: 2, x: 200, y: 400, size: 50  },
    { id: 6, label: '192.168.0.105', image: SERVERIMAGE, shape: "image", group: 2, x: 400, y: 400, size: 50  }
  ];
  const edges = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 1 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 2, to: 6 },
    { from: 3, to: 4 },
    { from: 3, to: 5 },
    { from: 3, to: 6 },
  ];

  const options = {physics: false};
  const [nodeId, setNodeId ] = useState(0)
  const [isOpen, setIsOpen ] = useState(false)

  const closeModal = () => setIsOpen(false)
  const showModal = () => setIsOpen(true)
  
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
  }, [container, nodes, edges]);

  return (
  <div>
    <div ref={container} style={{ height: '500px', width: '100%' }} />
    {/* {show?(<div style={{ height: '500px', width: '100%' }}>test message</div>):null} */}
    <DeviceModal id={nodeId}
      isOpen={isOpen}
      onRequestClose={closeModal}
    />
  </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     modalIsOpen: state.modalsStore.showDeviceModal 
//   }
// }
// const mapDispatchToProps = (dispatch) => ({
//   showDeviceModal: () => dispatch({ type: "ShowDeviceModal" }),
//   hideDeviceModal: () => dispatch({ type: "HideDeviceModal" }),
// })
// export default connect(mapStateToProps, mapDispatchToProps)(TopoGraph2);
export default TopoGraph2
