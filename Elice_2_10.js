const readline = require("readline");
let input = [];
let count =0;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (x) {
    count += 1; // 입력 횟수가 증가

    if (count === 1) {
        // 첫 번째 입력인 경우 동작
        input.push(x)
    } else if (count === 2) {
        // 두 번째 입력인 경우 동작
        input.push(x)
        rl.close()
    }

}).on("close", function () {
    if(parseInt(input[0])+parseInt(input[1])===0 || isNaN(parseInt(input[0]))){

    }else {
        let ts = parseInt(input[0])+16;
        let tu = parseInt(input[1])+6;
        let result = tu / ts;
        const temp1 = result * 1000
        const temp2 = Math.floor(temp1)
        let str = temp2 + ""
        let str2 = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] != "0") {
                if (i == 0) {
                    str2 += str[i] + "할 "
                } else if (i == 1) {
                    str2 += str[i] + "푼 "
                } else if (i == 2) {
                    str2 += str[i] + "리 "
                }
            }
        }
        let str3 = str2.split(" ")
        str3.forEach(element => console.log(element));
    }
});