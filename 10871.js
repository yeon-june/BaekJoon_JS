const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('\n')

const [N, X] = input[0].split(' ').map(Number)
const A = input[1].split(' ')
const ans = []

for(const num of A){
  if(num < X) {
    ans.push(Number(num))
  }
}

console.log(...ans)