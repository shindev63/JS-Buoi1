// bai1
/**
 *  sơ đồ 3 khối 
 * INPUT: lương 1 ngày, số ngày làm
 * 
 * PROCESS:
 * 1. lấy được input (hardcode)
 * 2. tính lương = lương 1 ngày + số ngày làm
 * 3. log lương ra màn hình
 * 
 * OUTPUT: lương
 */
console.log("Bài 1");
 var salaryPerDay = 100.000;
 var workingDays = prompt("Nhập số Ngày Làm");
 var totalSalary = salaryPerDay * workingDays
 console.log("Tổng lương trong tháng là:",totalSalary );
 // bai2
 /**
  * INPUT: 5 số thực, giá trị trung bình
  * 
  * PROCESS:
  * 1. lấy được input
  * 2. tính trung bình của 5 số thực = 5 số thực / 5
  * 3. log ra màn hình
  * 
  * OUTPUT: trung bình
  */
  console.log("Bài 2");
 var rnumber1 = prompt("Nhập số Thực 1");
 var rnumber2 = prompt("Nhập số Thực 2");
 var rnumber3 = prompt("Nhập số Thực 3");
 var rnumber4 = prompt("Nhập số Thực 4");
 var rnumber5 = prompt("Nhập số Thực 5");
var rsum =((rnumber1/5) + (rnumber2/5) + (rnumber3/5) + (rnumber4/5) + (rnumber5/5));
 console.log("Giá trị trung bình là:",rsum);
 // bai3
 /**
  * INPUT: USD hiện nay đổi sang VNĐ = 23.500 VNĐ , số tiền USD
  * 
  * PROCESS:
  * 1. lấy được input
  * 2. tính tiền = số tiền USĐ * USD hiện nay => tiền VNĐ
  * 3. log ra màn hình
  * 
  * OUTPUT: VNĐ
  */
  console.log("Bài 3");
 var USDToVNĐ = 23.500;
 var USD = 5;
 var charge = USD * USDToVNĐ
 console.log("Số tiền sau quy đổi VNĐ là:",charge,"VNĐ");
 // bai4
 /**
  * INPUT: 2 chiều dài và chiều rộng HCN, diện tích và chu vi HCN
  *     
  * PROCESS:
  * 1. lấy được input
  * 2. diện tích = dài * rộng
  * 3. chu vi = (dài + rộng) * 2
  * 4. log ra màn hình
  * 
  * OUTPUT: diện tích và chu vi
  */
 var length1 = 3;
 var length2 = 4;
 var width = 6;
 var acreage = length1 * width
 var perimeter = (length2 + width) * 2
 console.log("diện tích HCN là:",acreage);
 console.log("Chu vi HCN là:",perimeter);
// gợi ý bai5
/**
 * INPUT: 1 số có 2 chữ số, tính tổng 2 ký số
 * 
 * PROCESS:
 * 1. lấy được input
 * 2. tổng = 2 chữ số % 10;
 *           2 chữ số /10;
 * 
 * OUTPUT: tổng
 */
var n = 58;
var total1 = n % 10;
var total2 = Math.floor(n / 10);
console.log("Tổng của các chữ số là:", total1+total2);
// var n = 83;
//  var num1 = n % 10; //3 
//  var num2 = Math.floor(n / 10); //8
 //var num2 = Math.ceil(n / 10); 
 //var num2 = Math.round(n / 10);
