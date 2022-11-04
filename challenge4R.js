/*Buatlah sebuah function bernama indexPrime yang memiliki sebuah parameter (asumsi nama parameter 
adalah parameter param1) yang berisi angka. Buat code di di dalam function indexPrima yang menampilkan 
angka prima urutan ke param1.

extra : Gunakan hanya 1 function saja*/

//Drive Code
function indexPrime(param1) {
    //write your code
    let counter = 0;

    for (var testCase = 2; counter < param1; testCase++) {
        let isPrime = true;

        for (let pembagi = 2; pembagi <= Math.sqrt(testCase); pembagi++) {
            if (testCase % pembagi == 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            counter++;
        }
    }
    return testCase - 1;
}

console.log(indexPrime(4)); //result => 7
console.log(indexPrime(500)); //result => 3571
console.log(indexPrime(37786)); //result =>450881


/*Output
7
3571
450881*/