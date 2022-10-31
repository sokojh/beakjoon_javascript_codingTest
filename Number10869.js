const fs = require('fs');

// fs모듈의 readFileSync 함수를 통해 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
// 읽어드린 정보는 toString()함수를 통해 문자열로 변환하여야 사용할 수 있다.
// 입력 받은 문자열을 split() 함수를 통해 배열화한다. (split(' '), split('\n') 등)
// 예) 2 3 입력시, inputData = ['2', '3']
const inputData1 = fs.readFileSync('입력예제.txt').toString().split(' ');
const A = parseInt(inputData1[0])
const B = parseInt(inputData1[1])
console.log((A+B)+"\n"+(A-B)+"\n"+(A*B)+"\n"+Math.floor((A/B))+"\n"+(A%B))
console.log("d")
