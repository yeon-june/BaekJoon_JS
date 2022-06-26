const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split(' ')

const num1 = input[0].split('')
const num2 = input[1].split('')

const num1R = Number(num1.reverse().join(''))
const num2R = Number(num2.reverse().join(''))

console.log(num1R>= num2R ? num1R:num2R)