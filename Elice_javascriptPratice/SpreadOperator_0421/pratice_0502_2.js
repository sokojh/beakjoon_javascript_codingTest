async function test(){

    try{
        const bad = undefined;
        bad.x ;
        const p = Promise.reject(new Error('Oops!'))
        await p;

    }catch(err){
        console.log(err.message)
        console.log(err.message)

    }
}

test()