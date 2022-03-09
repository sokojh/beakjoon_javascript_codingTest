// 훈련병들이 있는 배열입니다.
let soldier = [12, 2, 5, 3, 7, 4, 10, 8, 1, 9, 13, 11, 6];

// 정렬된 배열과 길이를 구하세요.

soldier.sort(function compareNumbers(a,b){
    return a-b;
})
let count = soldier.length;

// 채점을 위한 코드입니다. 수정 하지 마세요!
console.log(soldier);
console.log(count);
