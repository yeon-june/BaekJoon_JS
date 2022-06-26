const fs = require('fs')
const input = parseInt(fs.readFileSync('example.txt').toString().trim())

if (( !(input % 4) && (input % 100)) || !(input % 400) ) {
  console.log(1)
} else {
  console.log(0)
}