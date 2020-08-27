function numberPrimeCruncher(input) {
  // only code here..
  //bikin array bilangan prima
  primeArr=[]
  for(let i=2;i<input;i++){
    is_i_prime=true
    for (let j=2;j<i-1;j++){
      if(i%j===0){
        is_i_prime=false
      }
    }
    if(is_i_prime){
      primeArr.push(i)
    }
  }
  //sampe sini dah dapet aray prime
  //mencari average aray prime
  let sumPrimeArr=0
  for(let i=0;i<primeArr.length;i++){
    sumPrimeArr+=primeArr[i]
  }
  // return sumPrimeArr
  //sampe sini mendapatkan nilai jumlah aray prime
  //lalu bagi
  let avgPrime=sumPrimeArr/primeArr.length
  // return avgPrime
//   console.log(avgPrime)
  let abveAvgPrimeArr=[]
  for(let i=0;i<primeArr.length;i++){
    if(primeArr[i]>avgPrime){
      abveAvgPrimeArr.push(primeArr[i])
    }
  }
  return abveAvgPrimeArr

  
}

console.log(numberPrimeCruncher(10)); // [ 5, 7 ]
console.log(numberPrimeCruncher(44)); // [ 23, 29, 31, 37, 41, 43 ]
console.log(numberPrimeCruncher(23)); // [ 13, 17, 19, 23 ]
console.log(numberPrimeCruncher(1)); // []
console.log(numberPrimeCruncher(0)); // []