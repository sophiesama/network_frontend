import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';

const TopoGraph = () => {
  const container = useRef(null);

  const nodes = [
    { id: 1, label: '192.168.0.100' },
    { id: 2, label: '192.168.0.101' },
    { id: 3, label: '192.168.0.102' },
    { id: 4, label: '192.168.0.103' },
    { id: 5, label: '192.168.0.104' }
  ];

  const edges = [
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 3 }
  ];

  const options = {};

  useEffect(() => {
    const network =
      container.current &&
      new Network(container.current, { nodes, edges }, options);
    console.log(network)
  }, [container, nodes, edges]);

  return <div ref={container} style={{ height: '500px', width: '100%' }} />;
};

export default TopoGraph;
