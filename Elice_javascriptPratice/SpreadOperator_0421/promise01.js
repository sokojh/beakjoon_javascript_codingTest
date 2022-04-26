n=1
function resolveWhenPositiveNumber(n){
    const promise = new Promise((resolve,reject)=>{

        if(n>0){
            resolve(`${n}은 양수입니다!`)
        }else{
            reject(`${n}은 음수입니다...`)
        }
    })

    promise
        .then(data => {console.log(data)})
        .catch((e)=>{console.log(e)})

}
