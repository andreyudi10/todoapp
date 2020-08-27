let x=["a","b","c"]
let v=[[1,3,4,5,8,10],2,3]
let k=[4,5,6]
let w={}
for(let i=0;i<x.length;i++){
  for(let j=0;j<v.length;j++){
    w[x[i]]=v[i]
    // w[x].push(k[j])
    // w[x[i]]=[w[x[i]],k[j]]
    console.log(k[j])
  }
}
console.log(w)

//cukup satu loop untuk menggabungkan aray menjadi sebuah object