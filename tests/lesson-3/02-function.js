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
// function isSoNguyenTo(number) {
//     if ((number > 2 && number % 2 === 0) || number <= 1) {
//         return false;
//     } else {
//         let squareNumber = Math.sqrt(number);
//         for (i = 2; i <= squareNumber; i++) {
//             if (number % i === 0) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// function filterSoNguyenTo() {
//     const arr = [1, 9, 0, 4, 5, 3, 2, 11, 6, 7, 10];
//     const soNguyenTo = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (isSoNguyenTo(arr[i])) {
//             soNguyenTo.push(arr[i]);
//         }
//     }
//     return soNguyenTo;
// }
// const result = filterSoNguyenTo();
// console.log(`result: ${result}`);

/** 5 */
// const users = [
//     { name: 'A', email: 'a@gmail.com' },
//     { name: 'B', email: 'b@gmail.com' },
//     { name: 'C', email: 'c@gmail.com' },
//     { name: 'D', email: 'd@gmail.com' }
// ]

// function updateEmail(name, newEmail) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].name === name) {
//             users[i].email = newEmail;
//             return `Đã update email của user ${name} thành công`;
//         }
//     }
//     return `Không tìm thấy ${name} trong danh sach users`;
// }
// const result = updateEmail('C1', 'C1@gmail.com');
// console.log(result);
// console.log(users);

/** 6 */
// const students = [
//     { name: 'A', score: 85 },
//     { name: 'B', score: 50 },
//     { name: 'C', score: 40 },
// ]
// console.log("Danh sách sinh viên :\n", students);

// function average() {
//     let sum = 0;
//     for (let i = 0; i < students.length; i++) {
//         sum += students[i].score;
//     }
//     return (sum / students.length).toFixed(2); //toFixed : số thập phân cần lấy 
// }
// const result = average();
// console.log(`Điểm trung bình của các sinh viên : ${result}`);

/** 7 */
// const cart = [
//     { name: 'procduct 1', price: 100 },
//     { name: 'procduct 2', price: 200 },
//     { name: 'procduct 3', price: 0 },
// ]

// function priceCheck() {
//     for (element of cart) {
//         if (element.price === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// const result = priceCheck();
// if (result === false) {
//     console.log(`Trong giỏ hàng có sp có giá bằng 0`);
// } else {
//     console.log(`Trong giỏ hàng không có sp có giá bằng 0`);
// }

// /** 8 */
// function store(hour) {
//     if (hour >= 9 && hour < 21) {
//         console.log(`Cửa hàng mở cửa`);
//     } else {
//         console.log(`Cửa hàng đóng cửa`);
//     }
// }
// store(21.1);

/** 9 */
// function getPrice(age) {
//     if (age <= 5) {
//         console.log('miễn phí');
//     } else if (age >= 6 && age <= 17) {
//         console.log('Giá vé 50k');
//     } else if (age >= 18) {
//         console.log('Giá vé 100k');
//     }
// }
// getPrice(18)

/** 10 */

/** 11 */
// function classifyStudent(score) {
//     if (score >= 8) {
//         console.log('Giỏi');
//     } else if (score >= 6.5 && score < 8) {
//         console.log('khá');
//     } else if (score >= 5 && score < 6.5) {
//         console.log('Trung bình');
//     } else {
//         console.log('Yếu');
//     }
// }
// classifyStudent(8);

//** 12 */
function weather(temperature) {
    if (temperature >= 30) {
        console.log(`Nhiệt độ hiện tại là ${temperature}, thòi tiết nóng`)
    } else if (temperature < 30 && temperature >= 20) {
        console.log(`Nhiệt độ hiện tại là ${temperature}, thòi tiết mát`)
    } else if (temperature < 20) {
        console.log(`Nhiệt độ hiện tại là ${temperature}, thòi tiết lạnh`)
    }
}
weather (31);
weather (29);
weather (10);
