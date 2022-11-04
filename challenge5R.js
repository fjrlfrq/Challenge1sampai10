/*Buatlah sebuah fungsi untuk memanipulasi string dengan mengikuti aturan sebagai berikut.
  1. Apabila kata diawali huruf vokal,fungsi langsung mengembalikan kata tersebut.
  2. Apabila kata diawali huruf konsonan, hurufkonsonan tersebut dipindahkan ke akhir kata 
     dan menambahkan akhiran 'nyo di katanya.'*/


//Drive Code

function stringManipulation(word) {
    //write your code here
    if (
        word[0].toLowerCase() == 'a' ||
        word[0].toLowerCase() == 'i' ||
        word[0].toLowerCase() == 'u' ||
        word[0].toLowerCase() == 'e' ||
        word[0].toLowerCase() == 'o'
    ) {
        console.log(word);
    } else {
        console.log(word.slice(1) + word.charAt(0) + 'nyo')
    }
}


stringManipulation('ayam'); //"ayam"
stringManipulation('bebek'); //"ebekbnyo"  = ebekb + nyo
stringManipulation('kambing');