const fs = require('fs');
const inputData1 = fs.readFileSync('입력예제.txt').toString().split(' ');
const A = parseInt(inputData1[0])
const B = parseInt(inputData1[1])
const C = parseInt(inputData1[2])
console.log(((A+B)%C)+"\n"+(((A%C)+(B%C))%C)+"\n"+((A*B)%C)+"\n"+(((A%C)*(B%C))%C))
