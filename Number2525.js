// file system 모듈을 불러온다.
const fs = require('fs');

// fs모듈의 readFileSync 함수를 통해 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
// 읽어드린 정보는 toString()함수를 통해 문자열로 변환하여야 사용할 수 있다.
// 입력 받은 문자열을 split() 함수를 통해 배열화한다. (split(' '), split('\n') 등)
// 예) 2 3 입력시, inputData = ['2', '3']
const inputData1 = fs.readFileSync('입력예제.txt').toString().split(/,| |\n/)
//공백 , 줄바꿈 정규표현식으로 자르는 방법이다.
let A = parseInt(inputData1[0])
let B = parseInt(inputData1[1])
let C = parseInt(inputData1[2])
let bun = B+C
if(bun>=60){
    let si = parseInt(bun/60) //60넘은 숫자만 가져옴
    let sib = parseInt(bun%60) // 60넘은 나머지 가져옴
    A += si
    B = sib
    if(A=24){
        A=0
    }else if(A>24){
        let temp =0;
        tmep = A-24
        A+=temp
    }
}else{
    B = bun
}
console.log(parseInt(A)+" "+parseInt(B))