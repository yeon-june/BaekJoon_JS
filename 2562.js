const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('\n').map(Number)

let maxN =0
let seq = 0

for(let i=0;i<9;i++) {
  if (input[i] >= maxN ){
    maxN = input[i]
    seq = i+1
  }
}

console.log(maxN)
console.log(seq)