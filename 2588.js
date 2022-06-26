const fs = require('fs')

const [A, B] = fs.readFileSync('example.txt').toString().trim().split('\n')

const [B1, B2, B3] = B.split('')

console.log(A*B3)
console.log(A*B2)
console.log(A*B1)
console.log(A*B)
