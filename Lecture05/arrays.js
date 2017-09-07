//Arrays

let arr = [1,2,3]

let arr2 = [1, 'hello', false, [2,3]]
//
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i])
// }

// for (let val of arr2) {
//     console.log(val)
// }

for (let index in arr2) {
    console.log(arr2[index])
}