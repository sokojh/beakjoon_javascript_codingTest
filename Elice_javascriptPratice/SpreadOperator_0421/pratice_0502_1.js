function foo(callback){
    callback();

}

function main(){
    console.log('Hello, World')

    foo(()=>{
        console.log('callbakc called, but not the end!!')
    });
    console.log('this is the real end!!!!')
}

main()