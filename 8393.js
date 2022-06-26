const fs = require('fs')
const N = parseInt(fs.readFileSync('example.txt').toString().trim())

let ans = 0

for(let i=1; i<=N; i++){
  ans += i
}
console.log(ans)