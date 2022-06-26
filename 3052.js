const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('\n').map(Number)

let left = new Set()

for(const num of input){
    left.add(num % 42)
}

console.log(left.size)