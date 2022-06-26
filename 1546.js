const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('\n')

const N = Number(input[0])
const scores = input[1].split(' ').map(Number)
const M = Math.max(...scores)

const newScores = scores.map((score) => {
  return (score/M)*100
})

let sum = newScores.reduce((ssum, newScore) => {
  return ssum + newScore
},0)

console.log(sum/N)

