const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('\n')

const N = Number(input[0])
const arr = input[1].split(' ').map(Number)

console.log(Math.min(...arr), Math.max(...arr))