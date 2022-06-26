const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('\n')

let ans = ''
const N = parseInt(input[0])

for(let i = 1; i <= N; i++){
  let tmp = input[i].split(' ').map(Number)
  ans += `Case #${i}: ${tmp[0]+tmp[1]}` + '\n'
}

console.log(ans)