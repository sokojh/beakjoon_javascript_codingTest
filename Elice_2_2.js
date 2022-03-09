// 터미널에 엘리스 토끼가 가진 금액을 입력할 수 있으며 입력된 금액에 따라 결과를 출력합니다.
// 조건문을 이용해 문제를 해결할 수 있습니다.
// 지시사항을 참고하여 코드를 작성하세요.
const readline = require("readline");
let input = [];
let budget = 0;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    input = line.split(' ')
    rl.close();
}).on("close", function () {
    input.forEach(element => budget += element);
    if(parseInt(budget)>=1000){
        console.log("택시")
    }else if(parseInt(budget)>=500){
        console.log("버스")
    }else if(parseInt(budget)>=300){
        console.log("지하철")
    }else{
        console.log("도보")
    }
});