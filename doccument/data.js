
var OutputNumber = [];
// Số đã thêm
document.getElementById('ThemSo').onclick = function Iso() {
    var InputNumber = Number(document.getElementById('iSo').value);
    OutputNumber.push(InputNumber)
    document.getElementById('ThemSo1').innerHTML = 'Số đã thêm:' + ' ' + OutputNumber
}
// // check số dương
// function laSoNguyenDuong(value){
//     return (Number.isInteger(value) && value > 0);
// }

// Tổng số Dương
document.getElementById("TongArry").onclick = function () {
    var sum = 0;

    for (var i = 0; i < OutputNumber.length; i++) {
        if (OutputNumber[i] > 0) {
            sum += OutputNumber[i]
        };

    }
    document.getElementById('TongArry1').innerHTML = 'Tổng số:' + ' ' + sum
}

// Đếm số Dương
document.getElementById("DemSoDuong").onclick = function () {
    var SND = [];

    for (var i = 0; i < OutputNumber.length; i++) {
        if (OutputNumber[i] > 0) {
            SND.push(i)

        }

        document.getElementById('DemSoDuong1').innerHTML = 'Đếm số Dương:' + ' ' + SND.length
    }

}
//  TimSoMin
document.getElementById("TimSoMin").onclick = function (){
    //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
    var min =  OutputNumber[0];
    var min_index= 0;   
    /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất*/
    for (let i = 1; i < OutputNumber.length; ++i) {
        if (min > OutputNumber[i]) { //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
            min = OutputNumber[i];
            min_index =i;
        }
    }
    document.getElementById('TimSoMin1').innerHTML = 'Tìm số nhỏ nhất:' + ' ' + min
}

//  Tìm số dương nhỏ nhất
document.getElementById("TimSoMin2").onclick = function (){
    //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
    var min =  OutputNumber[0];
    var min_index= 0;   
    /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất*/
    for (let i = 1; i < OutputNumber.length; ++i) {
        if (min > OutputNumber[i] && OutputNumber[i] > 0 ) { //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
            min = OutputNumber[i];
            min_index =i;
        }
    }
    document.getElementById('TimSoMin3').innerHTML = 'Tìm số dương   nhỏ nhất:' + ' ' + min
}
 
document.getElementById("TimSoChanCuoiCung").onclick = function (){
    //Giả định vị trí số nhỏ nhất là số đầu tiên của mảng.
    var find =  lastIndexOf();
       
    /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị nhỏ nhất*/
    for (let i = 1; i < OutputNumber.length; ++i) {
        if (min > OutputNumber[i] && OutputNumber[i] > 0 ) { //Thay đổi giá trị nhỏ nhất nếu tìm ra số nhỏ hơn
            min = OutputNumber[i];
            min_index =i;
        }
    }
    document.getElementById('TimSoChanCuoiCung1').innerHTML = 'Tìm số chẵn cuối cùng:' + ' ' + min
}

 


 