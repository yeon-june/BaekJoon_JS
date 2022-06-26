const fs = require('fs')
const N = parseInt(fs.readFileSync('example.txt').toString().trim())

let ans = ''

for(let i = 1; i <=N; i++){
  ans += i+'\n' 
}

console.log(ans)
