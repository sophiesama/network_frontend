const getRandomArbitrary = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2); //精确到2位
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}

const getRandomBytes = (digits) => {
  let res = "";
  while (digits > 3) {
    res = "," + getRandomInt(100, 1000)  + res
    digits -= 3
  }
  return getRandomInt(1,Math.pow(10, digits))+ res + " Bytes"
}

export {
  getRandomArbitrary,
  getRandomInt,
  getRandomIntInclusive,
  getRandomBytes
}