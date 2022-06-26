const fs = require('fs')
const [H, M] = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number)

if ( M >= 45 ){
  console.log(`${H} ${M-45}`)
} else if ( H === 0 ) {
  console.log(`23 ${60-45+M}`)
} else {
  console.log(`${H-1} ${60-45+M}`)
}

