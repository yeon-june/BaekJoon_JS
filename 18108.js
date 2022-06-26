const fs = require('fs')
const year = parseInt(fs.readFileSync('example.txt').toString().trim())

console.log(year-543)
