//implementasikan penggunaan readline pada fungsi yang telah dibuat di challenge #6

const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tulis kalimatmu disni > '
});

rl.prompt();

rl.on('line', (line) => {
    console.log(`hasil konversi: ${line}`);
  rl.prompt();
}).on('close', () => {
  console.log('Good Bye!');
  process.exit(0);
});

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

    return result.join(' ');
}