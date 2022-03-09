//elice 2번
console.log("(\\_/)\n(. . )\n|\\ /|")
//elice 3번
var num = 1030;
var string = 'hello, ';

num +=204;
string +='elice!'
console.log(num,string)
//elice 5번
// 한식 가격
// 한식 가격
var korean = 7000;

// 중식 가격
var chinese = 6000;

// 양식 가격
var western = 8500;

var discount_korean = korean-(korean*0.1);
// 전체 예산을 계산하여 저장해 보세요.
var total_price = (55*discount_korean)+(43*chinese)+(52*western);


// 할인된 한식의 가격



// 값을 확인해 보세요!
console.log("한식 : " + korean)
console.log("중식 : " + chinese)
console.log("양식 : " + western)
console.log("할인된 한식 : " + discount_korean)
console.log("전체 예산 : " + (total_price))

//elice 7번 문제
// fruits 배열을 만들어 과일들을 입력받고, fruits 배열에서 콩과 무를 제거하세요.
var fruits = ["사과", "오렌지", "딸기", "콩", "무"];

// 과일이 아닌 것을 잘 제거했는지 console.log를 통해 배열을 출력해 확인해봅니다.
console.log(fruits.filter((element) => element !== '콩','무'));
//elice 10번 문제
// 여러 숫자를 입력 받도록 코드를 작성하여, 입력된 숫자의 평균을 구하세요.

const readline = require("readline");
let input = [];
let average =0;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    input = line.split(' ').map((element)=> parseInt(element));
    rl.close();
}).on("close", function () {
    input.forEach(element => average += element);
    console.log(Math.floor(average/(input.length)));
});
