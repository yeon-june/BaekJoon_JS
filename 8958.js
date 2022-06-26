const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().split('\n')

const N = Number(input[0])

for(let i =1; i <= N; i++){
  let arr = input[i].split('')
  let score = 0
  let tot = 0
  for(const char of arr){
    if (char === 'O'){
      score += 1
      tot += score
    } else{
      score = 0
    }
  }
  console.log(tot)
}