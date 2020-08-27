function encrypt(input) {
  // your code here
  let arrcode=["abcdefghijklmnopqrstuvwxyz","!@#$%^&*()-+1234567890[]{}"]
  let tempString=""
  // console.log(input[0][0])
  for ( let i = 0 ; i < input.length ; i++ ) {
    // let tempString=""
    let isNone = true
    for (let j = 0 ; j < arrcode[0].length ; j++){
      if(input[i] === arrcode[0][j]){
        tempString += arrcode[1][j]
        isNone = false
      }
    }
    if (isNone){
      tempString+=input[i]
    }
    // console.log(tempString)
  }
  return(tempString)  
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2