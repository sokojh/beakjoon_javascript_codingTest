// 지시사항에 따라 코드를 작성합니다.



function makeJson(name,age){
    let obj= {
        name:name,
        age:age}

    let result = JSON.stringify(obj)

    return result
}

console.log(makeJson('박태완',20))