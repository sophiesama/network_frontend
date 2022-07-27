import { StyleSheet, css } from 'aphrodite';
import Seat from './Seat';
import { useDrop } from 'react-dnd'
import { ItemTypes } from './constants';
import { useState } from 'react';
import Person from './Person';
const pos = [
  [1, 2],
  [312, 441],
  [100, 200],
  [21, 14]
]
const peoplePos = [
  [2, 1],
  [441, 332],
  [200, 100],
  [14, 21]
]

export default function Test() {
  const [ posList, setPosList ] = useState(pos)
  const [ peoplePosList, setPeoplePosList ] = useState(peoplePos)
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.SEAT,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  }), [posList])
  let seatList = []
  let peopleList = []
  for (let i in posList) {
    // console.log(posList[i])
    seatList.push(<Seat pos={posList[i]}/>)
  }
  for (let i in peoplePosList) {
    // console.log(posList[i])
    peopleList.push(<Person pos={peoplePosList[i]}/>)
  }
  return (
    <div 
      ref={drop}
      className={css(styles.map)}
    >
      {/* <Seat text="this is a seat" pos={position}/> */}
      {seatList}
      {peopleList}
    </div>
  )
};

const styles = StyleSheet.create({
  logo: {
    height: '32px',
    margin: '16px',
    background: 'rgba(255, 255, 255, 0.2)'
  },

  map: {
    backgroundImage: "url(/test.png)",
    backgroundRepeat: "round",
    width: "1493px",
    height: "933px",
  },

  siteLayoutSubHeaderBackground: {
    background: '#fff',
    margin: "0 16px 0 16px",
    textAlign: 'center'
  },

  siteLayOutBackground: {
    background: '#fff',
    padding: "24px",
    minHeight: 360
  }
});