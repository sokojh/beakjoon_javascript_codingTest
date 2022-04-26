async function 더하기(){
    let 프로미스 = new Promise((resolve,reject)=>{
        let 힘든연산 = 1+1;
        reject(100)
    })
    try{
    let 결과 = await 프로미스;
    console.log(결과)
    }catch{
        console.log('프로미스 연산이 잘 안되었군요.')
    }
    }

더하기();