const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('\n')

let i = 0

while (i < input.length){
 let [A, B] = input[i].split(' ').map(Number)
 if (A || B) {
  console.log(A+B)
 } else{
  break
 }
 i++
}