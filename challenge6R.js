/*Buatlah sebuah fungsi untuk memanipulasi kalimat dengan mengikuti aturan pada tantangan sebelumnya
(tantangan ke-5)*/

function sentencesManipulation(sentence) {
    function stringManipulation(word) { //closures / inner function
        //write your code here
        if (
            word[0].toLowerCase() == 'a' ||
            word[0].toLowerCase() == 'i' ||
            word[0].toLowerCase() == 'u' ||
            word[0].toLowerCase() == 'e' ||
            word[0].toLowerCase() == 'o'
        ) {
            return word;
        } else {
            return word.slice(1) + word.charAt(0) + 'nyo';
        }
    }
    //write yout code here
    const words = sentence.split(' ');
    const result = [];

    words.forEach(item => {
        result.push(stringManipulation(item));
    })

    console.log(result.join(' '));
}

sentencesManipulation('ibu pergi ke pasar bersama aku');

/*output
'ibu ergipnyo eknyo asarpnyo ersamabnyo aku'*/