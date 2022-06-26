const fs = require('fs')
const input = parseInt(fs.readFileSync('example.txt').toString().trim())

for(let i = 1; i < 10; i ++) {
  console.log(`${input} * ${i} = ${input*i}`)
}