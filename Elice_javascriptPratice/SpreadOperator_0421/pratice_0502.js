let Acount = 0;
let lock = 0;
function saveDataToAccount(value){
    Acount = value
}

function getDataFromAcount(){
    return Acount
}

function 입금(amount){
    while(lock===1){}
    lock =1;
    let value = getDataFromAcount();
    value += amount;
    saveDataToAccount(value);
    lock =0;
}
function 출금(amount){
    amount = -1 * amount
    while(lock===1){}
    lock =1;
    let value = getDataFromAcount();
    value += amount;
    saveDataToAccount(value);
    lock =0;
}

입금(300);
console.log(Acount)
출금(200);
console.log(Acount)