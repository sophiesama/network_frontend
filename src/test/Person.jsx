import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './constants'
import { useState } from 'react'

export default function Person({ isDragging, text, pos }) {
  const [posX, setPosX] = useState(pos[0])
  const [posY, setPosY] = useState(pos[1])
  const handleClick = () => {
    console.log(posX)
  }
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.PERSON,
      item: {text},
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 1 : 1
      })
    }),
    []
  )
  return (
    <div
      onClick={handleClick}
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 50,
        left: posX,
        top: posY,
        position: "absolute",
        width: '30px',
        height: '30px',
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      👤
    </div>
  )
}