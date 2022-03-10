const readline = require("readline");
let input = [];
let result= [];
let divisor =0;
let str ="";
let count =1;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    input = line.split(' ')
    rl.close();
}).on("close", function () {
    divisor=parseInt(input[0])
    for(var i=1;i<=divisor;i++) {
        if (divisor % i === 0) {
            result.push(i);
        }
    }
    for(var j=0;j<result.length;j++){
        if(count ===10){
            str += result[j]+" "+"\n"
            count=1
        }else{
            str += result[j]+" "
            count++
        }
    }
    console.log(str);
    });