const fs = require('fs')
const [A, B, C] = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number)

if (A===B && B===C){
  console.log(10000+A*1000)
} else if(A !== B || A !== C || B !== C)  {
  if(A === B || A === C) {
  console.log(1000+(A*100))
  } else if(B === C) {
    console.log(1000+(B*100))
  } else {
  console.log(Math.max(A,B,C)*100)} }