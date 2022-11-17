var OutputNumber = [];
// Số đã thêm
document.getElementById("ThemSo").onclick = function Iso() {
  var InputNumber = Number(document.getElementById("iSo").value);
  OutputNumber.push(InputNumber);
  document.getElementById("ThemSo1").innerHTML =
    "Số đã thêm:" + " " + OutputNumber;
};
// // check số dương
// function laSoNguyenDuong(value){
//     return (Number.isInteger(value) && value > 0);
// }

// Tổng số Dương
document.getElementById("TongArry").onclick = function () {
  var sum = 0;

  for (var i = 0; i < OutputNumber.length; i++) {
    if (OutputNumber[i] > 0) {
      sum += OutputNumber[i];
    }
  }
  document.getElementById("TongArry1").innerHTML = "Tổng số:" + " " + sum;
};

// Đếm số Dương
document.getElementById("DemSoDuong").onclick = function () {
  var SND = [];

  for (var i = 0; i < OutputNumber.length; i++) {
    if (OutputNumber[i] > 0) {
      SND.push(i);
    }

    document.getElementById("DemSoDuong1").innerHTML =
      "Đếm số Dương:" + " " + SND.length;
  }
};
//  TimSoMin
document.getElementById("TimSoMin").onclick = function () {
  //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
  var min = OutputNumber[0];
  var min_index = 0;
  /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất*/
  for (var i = 1; i < OutputNumber.length; ++i) {
    if (min > OutputNumber[i]) {
      //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
      min = OutputNumber[i];
      min_index = i;
    }
  }
  document.getElementById("TimSoMin1").innerHTML =
    "Tìm số nhỏ nhất:" + " " + min;
};

//  Tìm số dương nhỏ nhất
document.getElementById("TimSoMin2").onclick = function () {
  //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
  var min = OutputNumber[0];
  var min_index = 0;
  /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất*/
  for (var i = 1; i < OutputNumber.length; ++i) {
    if (min > OutputNumber[i] && OutputNumber[i] > 0) {
      //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
      min = OutputNumber[i];
      min_index = i;
    }
  }
  document.getElementById("TimSoMin3").innerHTML =
    "Tìm số dương   nhỏ nhất:" + " " + min;
};

document.getElementById("TimSoChanCuoiCung").onclick = function () {
  for (var i = 0; i < OutputNumber.length; ++i) {
    if (OutputNumber[i] % 2) {
      var find = OutputNumber.lastIndexOf(i);
      // min_index =i;
    }
  }
  document.getElementById("TimSoChanCuoiCung1").innerHTML =
    "Tìm số chẵn cuối cùng:" + " " + find;
};

document.getElementById("DoiCho").onclick = function swap() {
  var position1 = +document.getElementById("Swap1").value;
  var position2 = +document.getElementById("Swap2").value;
  for (var i = 0; i < OutputNumber.length; ++i) {
    var temp = OutputNumber[position1];
    OutputNumber[position1] = OutputNumber[position2];
    OutputNumber[position2] = temp;
  }

  document.getElementById("DoiCho1").innerHTML =
    "Mảng được đổi là:" + " " + OutputNumber;
};
document.getElementById("SXTangDan").onclick = function () {
  var score = OutputNumber;
  score.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("SXTangDan1").innerHTML =
    "Mảng Sap xếp tăng dần là:" + " " + OutputNumber;
};



/*Tạo hàm kiểm tra số nguyên tố trong JavaScript*/
function isprime(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    
    let flag = 1;

    if (n <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
    
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
}

 
document.getElementById("TimSoNguyenToDT").onclick = function () {

    for (let i = 0; i < OutputNumber.length; i++){
        if (isprime(OutputNumber[i]) == 1)   ;
      }
      
      document.getElementById("TimSoNguyenToDT1").innerHTML =
    "Số nguyen to đầu tiên là" + " " + OutputNumber[i];
}
