/* 1 */
// function calBMI(height, weight) {
//     const BMI = weight / (height * height);
//     if (BMI < 18.5) {
//         return 'Thiếu cân';
//     }
//     if (BMI >= 18.5 || BMI < 25) {
//         return 'Bình thường';
//     }
//     if (BMI >= 25 || BMI < 30) {
//         return 'Thừa cân';
//     }
//     if (BMI >= 30) {
//         return 'Béo phì';
//     }
// }
// const result = calBMI(1.65, 59);
// console.log(BMI);

/* 2 */
// function convertTemperature(temp, tempType) {
//     if (tempType === 'C') {
//         return ((temp * 9) / 5) + 32;
//     }
//     if (tempType === 'F') {
//         return (temp - 32) * 5 / 9;
//     }
// }
// const result = convertTemperature(60,'C');
// console.log(result);

/* 3 */
// const arr = [1, 9, 0, 4, 7];
// function sumArr(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// const result = sumArr(arr);
// console.log(result);

/** 4 */
function isSoNguyenTo(number) {
    if ((number > 2 && number % 2 === 0) || number <= 1) {
        return false;
    } else {
        let squareNumber = Math.sqrt(number);
        for (i = 2; i <= squareNumber; i++) {
            if (number % i === 0) {
                return false;
            }
        }
    }
    return true;
}

function filterSoNguyenTo() {
    const arr = [1, 9, 0, 4, 5, 3, 2, 11, 6, 7, 10];
    const soNguyenTo = [];
    for (let i = 0; i < arr.length; i++) {
        if (isSoNguyenTo(arr[i])) {
            soNguyenTo.push(arr[i]);
        }
    }
    return soNguyenTo;
}
const result = filterSoNguyenTo();
console.log(`result: ${result}`);