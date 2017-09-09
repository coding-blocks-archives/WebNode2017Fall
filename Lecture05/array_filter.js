let arr = [1,2,3,4,5,6,7,8];

let evenArr = arr.filter(function (item, index, array) {
    console.log(index + ": " + item)

    return (item % 2 == 0)
})

console.log(evenArr)