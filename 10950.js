const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('\n')

const N = parseInt(input[0])

for(let i=1; i<=N; i++){
  let [A, B] = input[i].split(' ').map(Number)
  console.log(A+B) 
}