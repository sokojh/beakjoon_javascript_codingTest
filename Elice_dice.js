var dice = Math.floor(Math.random()*6)+1;

console.log(dice)

function isPrime(n){
    var divisor =2;
    while(n>divisor){
        if(n%divisor===0){
            return false;

        } else{
            divisor++
        }
    }return true
}
console.log(isPrime(8))

function reverse(str){
    var reverStr = ''// 빈 문자열
    for (var i =str.length-1;i>=0;i--){
        reverStr = reverStr + str.charAt(i) //str의 i번째 문자를 빈 문자열에 추가.
    }return reverStr;
}
console.log(reverse("hello"));

function timesTable(n) {
    for(var i=1;i<10;i++) {
        console.log(n+' x '+i+' = '+(n*i));

    }
}

timesTable(2); // 2단만 출력
timesTable(3); // 3단만 출력