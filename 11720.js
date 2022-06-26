const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('\n')

const N = Number(input[0])
const numbers = input[1].split('').map(Number)

const tot = numbers.reduce((acc,el)=>{return acc+el},0)

console.log(tot)