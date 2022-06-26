const fs = require('fs')
const N = Number(fs.readFileSync('example.txt').toString().trim())
let num = N
let i = 0

while (true){
  let sum = Math.floor(num/10) + num % 10
  num = (num % 10) * 10 + sum % 10
  
  i++

  if (N === num) {
    break
  }

}

console.log(i)