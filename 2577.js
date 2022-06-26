const fs = require('fs')
const [A, B, C] = fs.readFileSync('example.txt').toString().trim().split('\n').map(Number) 

const multi = String(A*B*C).split('').map(Number)
const numbers = new Array(10).fill(0)

for(const num of multi) {
  numbers[num] += 1
}

for(const cnt of numbers){
  console.log(cnt)
}