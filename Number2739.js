const fs = require('fs');
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
const inputData1 = fs.readFileSync('입력예제.txt').toString().split(/,| |\n/)
//공백 , 줄바꿈 정규표현식으로 자르는 방법이다.
let N = parseInt(inputData1[0])
for(let i =1;i<10;i++){
    console.log(N+" * "+i+" = "+N*i);
}