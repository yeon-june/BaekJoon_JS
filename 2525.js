const fs = require('fs')
const [now, cookT] = fs.readFileSync('example.txt').toString().split('\n')
const cook = parseInt(cookT)
const [A, B] = now.split(' ').map(Number) 

if (cook + B < 60) {
  console.log(`${A} ${B+cook}`)
} else if (parseInt((cook+B)/60)+A > 23) {
  console.log(`${parseInt((cook+B)/60)+A - 24} ${(cook+B)%60}`)
} else {
  console.log(`${parseInt((cook+B)/60)+A} ${(cook+B)%60}`)
}