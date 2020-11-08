const {matrixProduct, sumOfMatrices, sumOfEachRow} = require("./utils.js");


A = [
    [1,2,3],
    [4,5,6],
    [7,8,9] 
]
B = [
    [1,4,5],
    [2,7,9],
    [4,2,1] 
]
console.log(matrixProduct(A, B));
console.log(sumOfEachRow(A));
console.log(sumOfMatrices(A, B));