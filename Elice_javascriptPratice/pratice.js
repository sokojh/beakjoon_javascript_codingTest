let result = 0;
function isPrime(n) {
    let divisor = 2;
    if(n===1){return false;}
    while (n > divisor) { // n이 나누는 수보다 클 때까지

        if(n % divisor === 0) { // n과 나누는 수가 나누어 떨어지면
            return false; // 소수가 아님!
        } else {
            divisor++; // 나누어 떨어지지 않는다면 나누는 수 1 증가
        }
    }
    return true; // while문이 종료되면 그 수는 소수!
}
for(let i=1;i<201;i++){
    if(isPrime(i)===true){
        result+=i;
    }
}
console.log(result);
