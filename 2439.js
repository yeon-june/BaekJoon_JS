const fs = require('fs')
const input = parseInt(fs.readFileSync('example.txt').toString().trim())

let star = new Array(input).fill(' ')
let ans = ''

for(let i = 1; i<=input; i++){
  star[input-i] = '*'
  ans += star.join('') + '\n'
}

console.log(ans)