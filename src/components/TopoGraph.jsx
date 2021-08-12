import React, { useState } from 'react';
import { Row, Col, Switch } from 'antd';
import CoreTable from './tables/CoreTable';
import AccessTable from './tables/AccessTable';
import NetSelector from './NetSelector';
import CoreNet from './nets/CoreNet';
import AccessNet from './nets/AccessNet';

const TopoGraph = () => {
  const [dynamic, setDynamic ] = useState(false)
  const [netType, setNetType ] = useState(1)

  const switchChange = () => setDynamic(!dynamic)
  const netTypeChange = e => {setNetType(e.target.value)}

  return (
  <div>
    <Row gutter={24}>
      <Col span={12}>
        <Row gutter={24}>
          <Col span={12}>动态<Switch onChange={switchChange}/></Col>
          <Col span={9}><NetSelector netType={netType} selectLabel={netTypeChange}/></Col>
          <Col span={24}>
            {netType===1?<CoreNet dynamic={dynamic}/>:null}
            {netType===2?<AccessNet dynamic={dynamic}/>:null}
            {netType===3?<CoreNet dynamic={dynamic}/>:null}
          </Col>
        </Row>
      </Col>
        <Col span={12}>
          {netType===1?<CoreTable />:null}
          {netType===2?<AccessTable />:null}
          {netType===3?<CoreTable />:null}
        </Col>
    </Row>
  </div>
  );
};

export default TopoGraph
