// const array = [4,3,2,4,5,35,35]
//
// //for loop
// for (let i=0;i<array.length;i++){
//     console.log(array[i])
// }
//
// //foreach
// array.forEach((item)=>console.log(item))
// array.forEach(function(item){
//     console.log(item)
//
// })
//
// // map
// const testArray = array.map((item)=>item*2);
//
// console.log(testArray);
// reduce
const GIVEN_ARRAY = [[4, 2, 3], [4, [3, 4, [5, 3]], 5], [4, 3, 5]]
const RESULT_ARRAY = [4, 2, 3, 4, 3, 4, 5, 3, 5, 4, 3, 5]



const GIVEN_ARRAY2 = [[5, [3, [5, [6, [5, 4]]]], 3, [6, 246]]]
const RESULT_ARRAY2 = [5, 3, 5, 6, 5, 4, 3, 6, 246]

//hint
const HINT_ARRAY = [[5,3],[5,4],[5,5],[5,6]];
const HINT_RESULT= [5,3,5,4,5,5,5,6];

function faltterArray(givenArray){
    const resultArray = givenArray.reduce((prev,curr)=>{
        console.log(prev, curr);
        return prev.concat(curr);

    },[]);
    console.log(resultArray)
}
faltterArray(HINT_ARRAY)
function flattenArray(givenArray) {

    if (typeof givenArray !== 'object') {
        return givenArray;
    }

    const resultArray = givenArray.reduce((prev, curr) => {
        return prev.concat(flattenArray(curr));
    }, []);

    return resultArray;
}