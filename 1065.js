const fs = require('fs')
const N = Number(fs.readFileSync('example.txt').toString().trim())

const hanN = (num) => {
  let digits = String(num).split('').map(Number)

  if (digits.length <= 2){
    return 1
  } else{
    let diff = digits[0] - digits[1]
    for(let i = 0; i < digits.length-1; i++){
      if (digits[i]-digits[i+1] !== diff){
        return 0
      }
    }
    return 1
  }
}

let cnt =0

for(let j=1;j<=N;j++){
  if (hanN(j)){
    cnt ++
  }  
}

console.log(cnt)