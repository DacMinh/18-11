
var OutputNumber = [];
// Số đã thêm
document.getElementById('ThemSo').onclick = function Iso() {
    var InputNumber = Number(document.getElementById('iSo').value);
    OutputNumber.push(InputNumber)
    document.getElementById('ThemSo1').innerHTML = 'Số đã thêm:' + ' ' + OutputNumber
}
// check số dương
function laSoNguyenDuong(value){
    
    var checkSND = true;
     for ( var i = 0 ; i < OutputNumber.length; i++){
        if(i > 0){
            checkSND = false;break;
        } 
     } 
     return checkSND
} 



// // Tổng số Dương
// document.getElementById("TongArry").onclick = function () {
// var sum =0 ;

// for (var i = 0 ; i < OutputNumber.length; i++){
//    if( laSoNguyenDuong(i)) {
//     sum +=i
//    }return sum;
   
    
// }
// document.getElementById('ThemSo1').innerHTML = 'Số đã thêm:' + ' ' + OutputNumber
// }
        
    
   

// }  
// document.getElementById('TongArry1').innerHTML = 'Tổng số :' + ' ' + sum
// }

// document.getElementById('TongArry1').innerHTML = 'Tổng số là' + ' ' + sum 
//     }

// // Đếm số Dương
// document.getElementById("DemSoDuong").onclick = function () {
// var SND = [];

//     for (var i = 0 ; i < OutputNumber.length; i++){
//         if(i > 0) {SND.push(i)

//         }

// document.getElementById('DemSoDuong1').innerHTML = 'Đếm số Dương:' + ' ' + OutputNumber.length
// }

// }





 // TimSoMin

// document.getElementById("TimSoMin").onclick = function () {
// var min= Array[0];
// var minindex= 0;
//  ;


// for (var i = 1 ; i < iSo.length; i++) {
//     if (min > Array[Iso]) { min = Iso;
//         minindex = Iso


//     }
// }

// document.getElementById('TimSoMin1').innerHTML = 'Tìm số nhỏ nhất:' + ' ' + minindex
// }