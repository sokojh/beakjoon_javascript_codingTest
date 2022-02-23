// file system 모듈을 불러온다.
const fs = require('fs');

// fs모듈의 readFileSync 함수를 통해 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
// 읽어드린 정보는 toString()함수를 통해 문자열로 변환하여야 사용할 수 있다.
// 입력 받은 문자열을 split() 함수를 통해 배열화한다. (split(' '), split('\n') 등)
// 예) 2 3 입력시, inputData = ['2', '3']
const inputData1 = fs.readFileSync('입력예제.txt').toString().split(/,| |\n/)
//공백 , 줄바꿈 정규표현식으로 자르는 방법이다.
const dice1 = parseInt(inputData1[0])
const dice2 = parseInt(inputData1[1])
const dice3 = parseInt(inputData1[2])
if(dice1 === dice2 && dice1 ===dice3 && dice2===dice3){ console.log(10000+(dice1*1000))};
if(dice1!==dice2 ||dice1!==dice3||dice2!==dice3){ //셋중 하나라도 포함되면
    if(dice1===dice2 ||dice1===dice3){console.log(1000+(dice1*100))}
    if(dice2===dice3){console.log(1000+(dice2*100))}

}
if(dice1!==dice2&&dice1!==dice3&&dice2!==dice3){
    const sort = [dice1,dice2.dice3].sort();
    console.log(sort.pop()*100)
}
