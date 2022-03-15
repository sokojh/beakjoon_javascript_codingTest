const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var input = [];



rl.on("line", function (line) {

    input.push(parseInt(line));

    if (input.length == 2) {
        rl.close();
    }
}).on("close", function () {
    var x = input[0];
    var y = input[1];
    var ans = (6 + y) / (16 + x);




    if (Math.floor(ans * 10) != 0) {
        console.log(Math.floor(ans * 10) + '할')
    }
    if (Math.floor((ans * 100) % 10) != 0) {
        console.log(Math.floor(ans * 100) % 10 + '푼')
    }
    if (Math.floor(((ans * 1000) % 100) % 10) != 0) {
        console.log((Math.floor(ans * 1000) % 100) % 10 + '리')
    }
});