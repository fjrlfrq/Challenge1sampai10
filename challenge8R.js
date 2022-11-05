/*Buatlah sebuah funtion yang menerima string. String tersebut
merupakan suatu pola perhitungan dari beberapa bilangan namun bilangan nya itu
sendiri tidak lengkap. dan tugasmu adalah menebak 1angka yang seharusnya.
sehinggan apabila bilangan tersebut telah lengkap, maka akan membentuk suatu pola perhitungan yang benar.*/

function pola(str) {
  //write your code
  const split1 = str.split('*');
  const angka1 = split1[0].trim();
  const split2 = split1[1].split('=');
  const angka2 = split2[0].trim();
  const angka3 = split2[1].trim();

  for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
          for (let k = 0; k <= 9; k++) {
              if (angka1.replace('#', i) * angka2.replace('#', k) == angka3.replace('#', j)) {
                  return [i, j]
              }
          }
      }
  }
}

console.log(pola('42#3 * 188 = 80#204'));
// result: [8, 5];

console.log(pola("8#61 * 895 = 78410#5"));
//[7, 9]

console.log(pola("232332# * 2#38 = 6361261#12"))