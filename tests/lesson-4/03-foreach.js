/** bai 1 */
// const arr = [1, 2, 3];
// arr.forEach((value) => {
//     console.log(value);
// });

/** bai 2 */
const arr = [1, 3, 0, 3, 4, 2];
let sum = 0;
let max = 0;
arr.forEach((value) => {
    sum += value;
    if (value > max) {
        max = value;
    };
});
console.log("Tổng là: " + sum);
console.log("Số lớn nhất là: " + max);