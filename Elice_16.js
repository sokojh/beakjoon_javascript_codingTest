const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// N줄에 걸쳐 주어지는 문자를 문자열로 만들어 출력하세요.
var count = 0;
let N = 0;
let str = "";
rl.on("line", function (x) {
    if(parseInt(x)>0){N=parseInt(x)+1};
    if(parseInt(x)===0){rl.close()};
    count += 1;
    str += x
// count가 10이 되면, 즉 입력을 10번 받으면 입력이 종료됩니다.
    if (count === N) {

        rl.close();
    }
}).on("close", function () {
    console.log(str.substring(1,str.length))
    process.exit();
});