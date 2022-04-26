let promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
    if(Math.random()<0.5){
        return reject('실패')

    }else{
        resolve(10)
    }
},2000)
})

promise
.then(data=>{
    console.log('성공',data)
})
.catch(e=>{
    console.log('실패:',e)
})
.finally(()=>{
    console.log(promise)
    console.log('promise 종료')
})

