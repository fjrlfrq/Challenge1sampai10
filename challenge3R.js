//buatlah sebuah fungsi yang dapat mengkonversi number menjadi huruf romawi.

function romawi(number) {
    //write your code 
    const kamus = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let result = '';
    for (const roman in kamus) {
        while (number >= kamus[roman]) {
            number -= kamus[roman];
            result += roman;
        }
    }
    return result;
}

console.log("Script Testing untuk konversi Romawi/n");
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       |", romawi(4));
console.log("9     | IX       |", romawi(9));
console.log("13    | XIII     |", romawi(13));
console.log("1453  | MCDLIII  |", romawi(1453));
console.log("1646  | MDCXLVI  |", romawi(1646));

/*output
input | expected | result
------|----------|-------
4     | IV       | 4
9     | IX       | 9 
13    | XIII     | 13
1453  | MCDLIII  | 1453
1646  | MCDXLVI  | 1646   */