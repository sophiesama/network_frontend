import React, { useRef, useState } from 'react';
import useDraggable from '../hooks/useDraggable';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    postition: 'relative',
    display: 'flex',
    margin: '24px auto'
  },

  left: {
    height: '100%',
    postition: 'relative',
  },  
  right: {
    height: '100%',
  },
  handler: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    width: 'auto',
    height: '100%',

    userSelect: 'none',
    color: '#fff',
    textAlign: 'center',
    cursor: 'ew-resize',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
});

function DraggleLayout({
  children, // 两列布局
  min = 0, // 左侧最小宽度
  max = Infinity, // 左侧最大宽度
  containerWidth = 0, // 容器宽度
  containerHeight = 0, // 容器高度
  initLeftWidth = 0, // 初始左侧容器宽度
  handler = null, // 拖拽器
  onWidthChange = width => width, // 左侧容器高度变化
}) {
  const ref = useRef(null);

  const [position, setPosition] = useState({ x: initLeftWidth, y: 0 });

  const [props] = useDraggable(
    ref,
    {
      onMouseMove: ({ x, y }) => {
        let _x = x;
        if (_x < min) _x = min;
        if (_x > max) _x = max;
        if (onWidthChange) onWidthChange(_x);
        setPosition({ x: _x, y });
      },
    },
    { overbound: false },
  );
  const _handler = handler ? (
    React.cloneElement(handler, {
      ...handler.props,
      style: {
        ...handler.props.style,
        pointerEvents: 'none',
      },
    })
  ) : (
    <span style={{ fontSize: 18, pointerEvents: 'none' }}>》</span>
  );

  return (
    <div
      ref={ref}
      className={css(styles.root)}
      style={{ width: containerWidth, height: containerHeight }}
    >
      <div className={css(styles.root,styles.left)} style={{ width: position.x }}>
        {children[0]}

        <div className={css(styles.root,styles.left,styles.handler)} {...props}>
          {_handler}
        </div>
      </div>
      <div
        className={css(styles.root,styles.right)}
        style={{ width: containerWidth - position.x }}
      >
        {children[1]}
      </div>
    </div>
  );
}

const DraggleLayoutExample = () => {
  const [width, setWidth] = useState(0)
  return (
  <DraggleLayout
    containerWidth={550}
    containerHeight={220}
    min={50}
    max={500}
    initLeftWidth={100}
    onWidthChange={w => {setWidth(w); console.log(width)}}
    handler={
      <div
        style={{
          width: 4,
          height: '100%',
          background: 'rgb(77, 81, 100)',
        }}
      />
    }
  >
    <div
      style={{
        backgroundColor: `rgb(36, 205, 208)`,
        color: `#fff`,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      left
    </div>
    <div
      style={{
        backgroundColor: `rgb(116, 140, 253)`,
        color: `#fff`,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      right
    </div>
  </DraggleLayout>
  )
}
export default DraggleLayoutExample;