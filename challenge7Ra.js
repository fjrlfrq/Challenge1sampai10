/*buatlah sebuah fungsi yang mengalikan anggota dalam angka tersebut, hingga nili terakhir terdiri dari 1 digit.*/

//Driver code
//recursion
function weirdMultiply(number) {
    //write your code
    const numberString = number.toString();

    if (numberString.length == 1) {
        return number;
    }

        let total = numberString[0];
        for (let i = 1; i < numberString.length; i++) {
            total *= numberString[i];
        }
        return weirdMultiply(total);

}

console.log(weirdMultiply(39)); //-> 3 * 9 = 27 ->2 * 7 = 14 -> 1 * 4 = 4
console.log(weirdMultiply(999)); //-> 9 * 9 * 9 =729 -> 7 * 2 * 9 =126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(weirdMultiply(3)); //  3 karena telah satu digit