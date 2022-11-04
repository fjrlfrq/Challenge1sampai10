//while
function weirdMultiply(number) {
    //write your code
    let numberString = number.toString();

    if (numberString.length === 1) {
        return number;
    }

    while (numberString.length > 1) {
        let total = numberString[0];
        for (let i = 1; i < numberString.length; i++) {
            total *= numberString[i];
        }
        numberString = total.toString();
    }
    
    return Number(numberString);

}

console.log(weirdMultiply(39)); //-> 3 * 9 = 27 ->2 * 7 = 14 -> 1 * 4 = 4
console.log(weirdMultiply(999)); //-> 9 * 9 * 9 =729 -> 7 * 2 * 9 =126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(weirdMultiply(3)); //  3 karena telah satu digit
