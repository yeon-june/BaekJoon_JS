const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().toUpperCase().split('')

const answer = new Array(26).fill(0)

for(const char of input){
  answer[char.charCodeAt(0)-65] ++
}


const max = Math.max(...answer)
if (answer.filter(val => val===max).length > 1){
  console.log('?')
} else {
  console.log(String.fromCharCode(answer.findIndex(val => val === max) + 65))
}