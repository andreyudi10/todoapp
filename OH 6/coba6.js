function miniSudokuBoard ( text ) {
  // Code here
  let sudokuArr = []
  let count = 0
  for ( let i = 0 ; i < text.length/3 ; i++){
    let minitriArr = []
    for ( let j = 0 ; j < 3 ; j++) {      
      minitriArr.push( text[count])
      count += 1
    }
    sudokuArr.push(minitriArr)
  }
  
  if ( text.length%3 !== 0 ) {
    return "Invalid Input"
  }
  else if ( text.length > 0 ) {
    return sudokuArr
  }
  else{
    return "empty board"
  }
}

console.log(miniSudokuBoard('005030081'));
// /[ [ '0', '0', '5' ], [ '0', '3', '0' ], [ '0', '8', '1' ] ]
console.log(miniSudokuBoard('105802000'));
// // [ [ '1', '0', '5' ], [ '8', '0', '2' ], [ '0', '0', '0' ] ]
console.log(miniSudokuBoard('608730000'));
// // [ [ '6', '0', '8' ], [ '7', '3', '0' ], [ '0', '0', '0' ] ]
console.log(miniSudokuBoard('096040001'));
// // [ [ '0', '9', '6' ], [ '0', '4', '0' ], [ '0', '0', '1' ] ]
console.log(miniSudokuBoard('87109'));
// // Invalid input
console.log(miniSudokuBoard(''));
// // Empty board


