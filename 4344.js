const fs = require('fs')
const input = fs. readFileSync('example.txt').toString().trim().split('\n')

const C = Number(input[0])

for(let i = 1; i <= C; i++){
  let caseT = input[i].split(' ').map(Number)
  let N =caseT[0]
  let sum = 0
  for(let j = 1; j < caseT.length; j++){
    sum += caseT[j]
  }
  let mean = sum / N

  let over = 0
  for(let k = 1; k < caseT.length; k++){
    if (caseT[k] > mean){
      over ++
    }
  }
  console.log(`${((over/N)*100).toFixed(3)}%`) 
}