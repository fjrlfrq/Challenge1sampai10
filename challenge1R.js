/*Buatlah sebuah fungsi yang dapat menjumlahkan semua parameter yang dimasukkan
ke ddalam fungsi tersebut.*/

function sum() {
    //write your code
    let total = 0
    for(let i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
    }
    return total;
 }



console.log(sum(1,2,7));
console.log(sum(1,4));
console.log(sum(11));
console.log(sum(10,3,6,7,9));

/*Output
10
5
11
35 */