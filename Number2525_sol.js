// 다른사람이 푼것을 보고 다시 품...

const fs = require('fs');
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
const inputData1 = fs.readFileSync('입력예제.txt').toString().split(/,| |\n/)
//공백 , 줄바꿈 정규표현식으로 자르는 방법이다.
let currentHour = parseInt(inputData1[0])
let currentMinute = parseInt(inputData1[1])
let cookTime = parseInt(inputData1[2])

const cookEndTimeHour = parseInt((currentHour*60+currentMinute+cookTime)/60);
// 여기선 모두 분으로 바꿔서 더해가지고 계산해버린다. 그러고 60나누면 몫이 시간일테다
const cookEndTimeMinute = parseInt((currentHour*60+currentMinute+cookTime)%60);
// 더불어 여기서 60 나머지하면 그게 분으로 될것이다.
console.log(cookEndTimeHour>=24 ? cookEndTimeHour-24 : cookEndTimeHour,cookEndTimeMinute);
// 하지만 해결 안된것은 24시간이 넘어가면 0분으로 치기로 했으니 -24 를 해주면 0시도 포함할 수 있게된다.