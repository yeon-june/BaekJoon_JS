const fs = require('fs')
const char  = fs.readFileSync('example.txt').toString().trim()

console.log(char.charCodeAt(0))