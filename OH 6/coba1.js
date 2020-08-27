function averageLengthWord ( words ) {
  let tempString = ""
  let wordsz = []
  for(let i = 0 ; i < words.length ; i++ ) {
    if (words[i] !== " " ) {
    tempString += words[i]
    // console.log(tempString)
      if ( i === words.length - 1) {
          // console.log(tempString)
        wordsz.push ( tempString )
        tempString = ""
      }
    }
      else if ( words[i] === " " ) {
        wordsz.push(tempString)
        tempString = ""
      }    
  }
      // return wordsz
      // didapat aray untuk tiap kata
      // return wordsz[0].length
  let wordszlength = []
  for(let i = 0 ; i < wordsz.length ; i++ ) {
        // console.log(wordsz[i].length)
    let tempNum = 0
    tempNum = wordsz[i].length
    wordszlength.push(tempNum)
  }
      // return wordszlength
    
      //mencari rata2 yang dibulatkan
  let sum = 0
  for (let i = 0 ; i < wordszlength.length ; i++){
    sum += wordszlength[i]
        // console.log(sumArr)
  }
  let avg = Math.round ( sum/wordszlength.length )
    
  let result = []
    for ( let i = 0 ; i < wordsz.length ; i++ ) {
      if ( wordsz[i].length === avg ) {
        result.push(wordsz[i])
      }
    }
    return result      
}
    
    console.log(averageLengthWord('dd dddd dddddd dddddddd'));
    console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
    console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
    console.log(averageLengthWord('I am diligent')); // []