// 7.
// let n = Number(prompt("nhập n"));
// for(let i = 1; i <=n; i++) {
//     if(n % i == 0) {
//         console.log(i);
//     }
// }

// 8.
// let n = Number(prompt("nhập n"));
// var flag = true;
// if (n == 2) {
//     flag = true;
// }
// if (n < 2){
//     flag = false;
// }
// else{
//     for (var i = 2; i < n-1; i++)
//     {
//         if (n % i == 0){
//             flag = false;
//             break;
//         }
//     }
// }
// if (flag == true){
//     console.log(n + " là số nguyên tố");
// }
// else{
//     console.log(n + " không phải là số nguyên tố");
// }


// 9. 
// let s = prompt("Chuỗi s");
// let l = prompt("Số l");

// while (s.lenght < 1) {
//     s += "0"
// }
// console.log(s);

// 10.
// let m = Number(prompt("Nhập m"))
// let n = Number(prompt("Nhập n"))
// for(let i=m;i>1 ; i--) {
//     if (m%i == 0 && n%i == 0  ) {
//        console.log(i);
//        break;
//     }
// }

// 12.
// let m = Number(prompt("Nhập m"))
// let n = Number(prompt("Nhập n"))
// for(let i=2;; i++) {
//     if (i%m == 0 && i%n == 0  ) {
//        console.log(i);
//        break;
//     }
// }

// 13.
// let n = Number(prompt("Nhập n"));
// for(let i = 1; i <= 10; i++) {
//     console.log(n + "x" + i + "=" + n*i );
// }


// 14. 

// let n = Number(prompt("Nhập n"))
// for(let i = 1; i <= n; i++) {

//     for(let j = 1; j <= n; j++) {
//         document.write("*");
//     }
//     document.write("<br />");
// }


// 15.
// let m = Number(prompt("Nhập m"))
// let n = Number(prompt("Nhập n"))
// for(let i = 1; i <= n; i++) {

//     for(let j = 1; j <= m; j++) {
//         document.write("*");
//     }
//     document.write("<br />");
// }

// 16.
// let n = Number(prompt("Nhập n"))
// for(let i = 1; i <= n; i++) {

//     for(let j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("<br />");
// }

// 17. 
// let chieuCao = Number(prompt("Chiều cao"));
// let canNang = Number(prompt("Cân nặng"));
// if ( chieuCao <=0 || canNang <= 0) {console.log("Nhập lại");}
//         chieuCao = chieuCao / 100;
//         let bmi = canNang / (chieuCao * chieuCao);
//     if(bmi < 18.5) {
//         console.log("Nhẹ cân");
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         console.log("Bình thường");
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         console.log("Thừa cân");
//     } else if (bmi >= 25) {
//         console.log("Béo phì");
//     }