/* Optional Parameter
secara default, parameter di functional javascript itu optional
artinya parameter tidak wajib mengisi valuenya ketika memanggil function
jika tidak terdapat value yang dikirim ke parameter ketika 
memanggil function, maka secara otomatis parameter tersebut bernilai undefined.
*/

// contoh kode

function sayHello (firstName, middleName, lastName) {
    document.writeln(`<p>${firstName}</p>`);
    document.writeln(`<p>${middleName}</p>`);
    document.writeln(`<p>${lastName}</p>`);
}

sayHello("Misbah");