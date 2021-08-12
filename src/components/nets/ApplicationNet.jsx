import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import { SERVERIMAGE, KUBERNETESIMAGE, NGINXIMAGE, DOCKERIMAGE } from '../../constants/urls';
// import { connect } from 'react-redux';

const ApplicationNet = ({dynamic}) => {
  const container = useRef(null);

  const nodes = [
    { id: 1, image: KUBERNETESIMAGE, shape: "image", group: 1, size: 50 },
    { id: 2, image: SERVERIMAGE, shape: "image", group: 2, size: 50 },
    { id: 3, image: SERVERIMAGE, shape: "image", group: 2, size: 50 },
    { id: 4, image: SERVERIMAGE, shape: "image", group: 2, size: 50 },
    { id: 5, image: NGINXIMAGE, shape: "image", group: 3, size: 50 },
    { id: 6, image: NGINXIMAGE, shape: "image", group: 3, size: 50 },
    { id: 7, image: NGINXIMAGE, shape: "image", group: 3, size: 50 },
    { id: 8, image: NGINXIMAGE, shape: "image", group: 3, size: 50 },
    { id: 9, image: DOCKERIMAGE, shape: "image", group: 3, size: 50 },
    { id: 10, image: DOCKERIMAGE, shape: "image", group: 3, size: 50 },
    { id: 11, image: DOCKERIMAGE, shape: "image", group: 3, size: 50 },
  ];
  let edges = [
    { from: 1, to: 2},
    { from: 1, to: 3},
    { from: 1, to: 4},
    { from: 2, to: 6},
    { from: 2, to: 7},
    { from: 2, to: 8},
    { from: 3, to: 9},
    { from: 3, to: 10},
    { from: 3, to: 11},
    { from: 4, to: 5},
  ];

  const options = {
    layout: {
      hierarchical: {
        direction: "UD",
        sortMethod: "directed",
      }
    },
    edges: {
      arrows: "to"
    }
  };
  
  //create network first time
  useEffect(() => {
    const network = container.current &&
    new Network(container.current, { nodes, edges }, options);
    network.on("selectNode", (params) => {
      console.log(params.nodes[0])
    });
  }, []);

  //dynamic transmitt speed change
  useEffect(() => {
    if (!dynamic) return false 
    const interval = setInterval(() => {
      console.log("interval test")
      const network =
      container.current &&
      new Network(container.current, { nodes, edges }, options);
      network.on("selectNode", (params) => {
        console.log(params.nodes[0])
      });
    }, 1000);
    return () => clearInterval(interval)
  }, [dynamic])
  return (
  <div>
      <div ref={container} style={{ float: 'left', height: '500px', width: '100%', borderRight: 'dashed #CCCCFF' }} />
  </div>
  );
};

export default ApplicationNet
