function highestTopSpeed(data) {
  // your code here
  let arrName = []
  let arrSpeed = []
  let tempString = ""
  for ( let i = 0 ; i < data.length ; i++){
    if (data[i] !== ":" &&
        data[i] !== "," ) {
          tempString += data[i]
          if ( i === data.length - 1) {
            arrSpeed.push(parseInt(tempString))
          }
        }
    else if ( data[i ]=== ":" ) {
      arrName.push(tempString)
      tempString = ""
    }
    else if ( data[i] === "," ||
            i === data.length - 1) {
      arrSpeed.push(parseInt(tempString))
      tempString = ""
    }
  }
  // console.log(arrName)
  // console.log(arrSpeed)
  //lakukan sorting untuk aray speed
  for ( let i = 0 ; i < arrSpeed.length ; i++) {
    for ( let j = 0 ; j < arrSpeed.length ; j++){
      if (arrSpeed[i] > arrSpeed[j] ) {
        let tempNum = arrSpeed[i]
        arrSpeed[i] = arrSpeed[j]
        arrSpeed[j] = tempNum
      }
    }
  }
  if ( arrSpeed.length > 0 ) {
      return(arrSpeed[0])
  }
  else{
      return "No data"
  }   
}

console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
// 180

console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
// 200

console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
// 175

console.log(highestTopSpeed(''));
// No data
