const fs = require('fs')
const N = parseInt(fs.readFileSync('example.txt').toString().trim())

let ans = ''

for (let i = N; 1<=i; i--){
  ans += i +'\n'
}

console.log(ans)