const fs = require('fs')
const N = parseInt(fs.readFileSync('example.txt').toString().trim())

let ans = ''
let star = ''

for (let i=1; i<=N; i++){
  star += '*'
  ans += star + '\n'
}

console.log(ans)