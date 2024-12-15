/** 1 */
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

/** 2 */
// function inBangCuuChuong() {
//     for (let i = 2; i <= 9; i++) {
//         console.log(`Bảng cửu chương ${i}:`);
//         for (let j = 1; j <= 10; j++) {
//             console.log(`${i} x ${j} = ${i * j}`);
//         }
//         console.log(''); // Tạo 1 dòng trống giữa các bảng cửu chương
//     }
// }
// inBangCuuChuong();

/** 3 */
// const sole = [];
// for (let i = 1; i <= 99; i += 2) {
//     sole.push(i);
// }
// console.log(sole);

/** 4 */
// for (let i = 1; i <= 10; i ++) {
//     console.log(`user-${i}@exmaple.com`);
// }

/** 5 */
const doanhthu=[
    {month: 1, total: 10},
    {month: 2, total: 10},
    {month: 3, total: 10},
    {month: 4, total: 10},
    {month: 5, total: 10},
    {month: 6, total: 10},
    {month: 7, total: 10},
    {month: 8, total: 10},
    {month: 9, total: 10},
    {month: 10, total: 10},
    {month: 11, total: 10},
    {month: 12, total: 11},
]
let sum = 0;
// for(let i = 0; i<doanhthu.length;i++){
//     sum +=doanhthu[i].total;
// }
for(element of doanhthu){
    sum+=element.total;
}
console.log(sum);