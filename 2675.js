const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('\n')

const T = Number(input[0])

for(let i = 1; i <= T; i ++ ){
  let test = input[i].split(' ')
  let R = Number(test[0])
  let text = test[1].split('')
  let result =''
  for(const char of text){
    for(let j =0; j<R; j++){
      result += char
    }
  }
  console.log(result)
}
