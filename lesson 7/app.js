// let a = 'hello';
// let b =10;

// nhập dữ liệu từ bàn PHÍM VÀ GÁN GIÁ TRỊ VỪA NHẬP VÀO TRONG 1 BIẾN

// let input = prompt("hãy nhập vào đây để gán giá trị cho biến 'input': "); // dữ liệu có kiểu string

// let x = Number(prompt("nhập số x"));
// let y = Number(prompt("nhập số y"));

// let z = x + y;
// console.log(z);


// console.log("bạn vừa nhập vào biến 'input'"); 


// let name = "aa"

// {
//     //bên trong 1 khối lệnh
//     let name = "Someone Else"
//     let age = 28;

//     {
//         let address = "Thai Binh";
//         // dùng được age ở chỗ này

//         // address chỉ tồn tại trong này
//     }

//     console.log(age);
// }

// console.log(age); //không tồn tại ở đây



// let age = prompt("Nhập vào tuổi của bạn");

// nếu age nhỏ hơn 18 thì => "Không cho vào"
// nếu age lớn hơn hoặc = 18 => "Vào thoải mái"

// if (age < 18) {
//     console.log("Không cho vào");
// } else {
//     console.log("Vào thoải mái");
// }

// nhập vào phân loại của 1 thằng học sinh : 1, 2, 4
// nếu phân loại là 1 => 'Thằng này xứng đáng có 10 người yêu'
// nếu phân loại là 2 => '9.5 điểm'
// nếu phân loại là 3 => 'Cần cố gắng hơn'

// let rank = prompt('nhập vào phân loại');
// if (rank == 1) {
//     console.log('Thằng này xứng đáng có 10 người yêu')
// } else if (rank == 2) {
//     console.log('9.5 điểm')
// } else if (rank == 3) {
//     console.log('Cần cố gắng hơn');
// } else {
//     console.log('Nhập đúng rank của bạn');
// }

// let text = prompt('Nhập vào 1 chuỗi');

// if(text.length < 8) { //text.lenght lệnh lấy độ dài chuỗi
//     console.log('Chuỗi ngắn quá');
// } else {
//     console.log('Chuỗi này được');
// }

// in ra dòng " I Love You" 500 lần, mỗi dòng có đánh số thứ tự

// for(let count = 1; count <= 500; count++) {
//     console.log(count + ". I Love You");
// }

// let sum = 0;
// for(let count = 1; count <= 50; count++) {
//     sum += count;
// }
// console.log(sum);

// let num = 10;
// while(num >=6) {
//     console.log(num);
//     num = Math.floor(Math.random() * 10);
// }

// let index = 1;
// while(index <= 200) {
//     console.log(index);
//     index++;
// }

// let s = prompt("Chuỗi s");
// let l = prompt("Số l");

// while (s.lenght < 1) {
//     s += "a"
// }
// console.log(s);

// let x = prompt("Nhập số x");
// let y = prompt("Nhập số y");

// if (
//     x >=0
//     && x < y
//     && y <= 100
// ) {
// while (x < y) {
//     x++;
//     y--;
// }
// console.log(x,y);
// }

// for(let num = 1; num <= 500; num++) {
//     console.log(num);
// }


// for(let i = 1; i <= 300; i++) {
//     if (
//         i % 2 == 0 && i % 3 == 0
//     ) 
//     { console.log(i);}
// }

// let sum = 0;
// for(let i = -30; i <= 50; i++) {
//     if (i%2==0) {
//         sum += i
//     }
// }
// console.log(sum);

// let i = 1;
// let n = prompt(" nhập vào n")
// let tong = 1;
// while (i <= n) {
//     tong = tong * n;
//     i++;
// }
// console.log(tong);

// let res = 1;
// let n = Munber(prompt('Nhập số n'));
// for (let i = 1; i <= n; i++) {
//     res =  res * i;
// }


// let a= Number(prompt("a"));
// let b= Number(prompt("b"));
// let x= Number(prompt("x"));

// let kq = null

// for(let i=a; i<=b; i++) {
//     if (i % x == 0) {
//        kq = i;
//        break;
//     }
// }


let S = 0;
let n = prompt('n');
for(let i = 1; i <= n; i++) {
    S += 1/ (i * (i + 1));
}
console.log(S);
