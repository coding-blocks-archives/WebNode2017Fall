function sum (...numArr) {
    return numArr.reduce((accum, item) => accum + item)
}

let sum1 = sum(3);
let sum2 = sum(3,6);
let sum3 = sum(3,2,8);
console.log(sum1);
console.log(sum2);
console.log(sum3);

function del (a, b, c) {
    return (b*b - 4*a*c)
}

let coeffs = [4,8,2];

console.log(del(...coeffs))


