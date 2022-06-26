const selfNumber = (N) => {
  const oneonone = String(N).split('').map(Number)
  const tot = oneonone.reduce((acc,el) => {return acc+el}, 0)

  return N + tot
}

let natNs = new Array(10001).fill(1)

for(let i = 1; i <= 10000; i++){
  let tmp = selfNumber(i)
  natNs[tmp] = 0
}

for(let j = 1; j <= 10000; j++){
  if(natNs[j]){
    console.log(j)
  }
}