const readline = require("readline");
let input = [];
let count =0;
let str="";
let result ="";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (x) {
        str = x
        rl.close()


}).on("close", function () {
    for(let i =0; i<str.length;i++){
        if(str.charCodeAt(i)>47 && str.charCodeAt(i)<58){
            result += str[i]
        }else{}
    }
    console.log(result);
});