/*buatlah sebuah function deret bilangan kelipatan 3 yang mengembalikan sebuah array dengan panjang
array yang dinamis sehingga fungsi tersebut akan menerima parameter number yang akan menjadi nilai dari 
panjang array yang akan dikeluarkan.
Deret bilangan ini mengikuti aturan sebagai berikut :
1.yang apabila habis dibagi dengan 5 ccetak "KAS"
2.yang apabila habis dibagi dengan 6 cetak  "KUS"
3.yang apabila habis dibagi dengan 5 dan 6 cetak "KASKUS"*/

function deretKaskus(n) {
    //write code here
    const result = [];
    const length = n * 3
    for (let i = 3; i <= length; i += 3) {
        if (i % 5 == 0 && i % 6 == 0) {
            result.push('KASKUS');
        } else if (i % 5 == 0) {
            result.push('KAS');
        } else if (i % 6 == 0) {
            result.push('KUS');
        } else {
            result.push(i);
        }
    } return result;
}

console.log(deretKaskus(10));

//output
//[3, "KUS", 9, "KuS", "KAS", "KUS", 21, "KUS", 27, "KASKUS"]