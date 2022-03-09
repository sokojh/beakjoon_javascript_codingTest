// money 문자열입니다.
const re = "500원"
var money = '500원, 엘리스 토끼는 하루 용돈으로 500원. 단돈 500원을 받는다. 부모님이 주시는 500원. 하지만 잘못한 것이 있으면 500원을 받지 못한다.'

let arr = money.split(re)

console.log(arr)