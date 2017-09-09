let arr = [11,15,23,21,45,67,87,83,56]


function numIncrCompare(a, b) {
    return ((100000 * (a%10 - b%10)) + (1000 * (a%100 - b%100)) + (a%1000 - b%1000))
}


console.log(arr.sort(numIncrCompare))
