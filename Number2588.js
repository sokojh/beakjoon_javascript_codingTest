// file system 모듈을 불러온다.
const fs = require('fs');

// fs모듈의 readFileSync 함수를 통해 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
// 읽어드린 정보는 toString()함수를 통해 문자열로 변환하여야 사용할 수 있다.
// 입력 받은 문자열을 split() 함수를 통해 배열화한다. (split(' '), split('\n') 등)
// 예) 2 3 입력시, inputData = ['2', '3']
const inputData1 = fs.readFileSync('입력예제.txt').toString().split('\n');//\n으로 나눠져있어서 \n으로 분류

const c1 = parseInt(inputData1[0])
const c2 = parseInt(inputData1[1])
const c3 = (c2%10)*c1 //10의 나머지면 1의자리만 남기므로 472 * 5가 된다.
const c4 = Math.floor((c2%100)/10)*c1 //나머지로 85가 남았으면 다시 10을 나눠주면 8.5가되고 Math floor로 소수점 덜어내면 끝
const c5 = Math.floor((c2/100))*c1 //Math floor로 소수점을 덜어냄
const c6 = c1*c2
console.log(c3+"\n"+c4+"\n"+c5+"\n"+c6)