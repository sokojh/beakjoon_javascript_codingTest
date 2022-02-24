const fs = require('fs');
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
const inputData1 = fs.readFileSync('입력예제.txt').toString().split(/,| |\n/)
//공백 , 줄바꿈 정규표현식으로 자르는 방법이다.
let N = 75
let count = 0;
function f(a) {
    let b = a+(Math.floor(a/10))+(a%10)
    console.log(b)
    count++
    if(a>=1000){
        return console.log(count+"회 반복했으므로 종료합니다.")
    }
    return f(b)
}

f(N)