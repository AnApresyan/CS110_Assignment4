function sumOfMatrices(mat1, mat2){
    if (mat1.length != mat2.length || mat1[0].length != mat2[0].length){
        console.log("These two matrices cannot be added to each other");
        return;
    }
    let finalmat = [];
    for (let row = 0; row < mat1.length; row++){
        finalmat[row] = [];
        for (let col = 0; col < mat2[0].length; col++){
            finalmat[row][col] = mat1[row][col] + mat2[row][col];
        }
    }
    return finalmat;
}


function sumOfArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function sumOfEachRow(mat){
    let sum = [];
    for (let i = 0; i < mat.length; i++){
        sum.push(sumOfArray(mat[i]));
    }
    return sum;
}


function matrixProduct(mat1, mat2){
    let final = [];
    for (let row = 0; row < mat1.length; row++){
        final[row] = [];
        for (let col = 0; col < mat2[0].length; col++){
            let sum = 0;
            for (let n = 0; n < mat1[0].length; n++){
                sum += mat1[row][n] * mat2[n][col];
            }
            final[row][col] = sum;
        }
    }
    return final;
}

module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow
};

