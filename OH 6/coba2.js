/*

=======================
Initial Object Grouping
=======================

[INSTRUCTION]

Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.


[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama

{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}

[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex

*/

function initialObjectGrouping(studentsArr) {
  let stundentsSingleArr=[]
  let firststrArr=[]
  //untuk first string array terlebih dahulu
  for (let i=0;i<studentsArr.length;i++){
    let tempStr=""
    tempStr=studentsArr[i][0]
    firststrArr.push(tempStr)
  }
  //lalu di hapus bila ada yang sama
//   return firststrArr
  let tempArr=[]
  for(let i = 0 ; i < firststrArr.length ; i++ ) {
      let isSame = false
      for(let j = 0 ; j < tempArr.length ; j++ ) {
          if(tempArr[j]===firststrArr[i]){
              isSame=true
          }
      }
      if(isSame===false){
          tempArr.push(firststrArr[i])
        //   console.log(tempArr)
      }
  }
  firststrArr=tempArr
  console.log(firststrArr)


}


console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/

// console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/

// console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}


*/
