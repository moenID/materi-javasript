/* Function Return Value
secara default, function itu tidak menghasilkan value apapun,
namun jika mengingikan untuk menghasilkan value, bisa membuat function 
untuk mengembalikan value
agar function bisa menghasilkan value, bisa menggunakan kata kunci return di dalam functionnya
dan dalam block function, untuk menghasilkan nilai tersebut
harus menngunakan kata kunci return, lalu diikuti dengan data 
yang ingin dihasilkan
function hanya bisa mengembalikan satu data, jika ingin mengembalikan
beberapa data sekaligus, bisa menggunakan array sebagai return valuenya.
*/

// contoh kode function dengan return value

function sayHello(firstName, lastName) {
    const say = `Hello ${firstName} ${lastName}`;
    return say;
}

// memanggil function dan menangkap return value
const result = sayHello("Misbahul", "Munir");
document.writeln(`<p>${result}</p>`);


//function dengan return value lebih dari satu

function getNilai(value) {
    if (value > 90){
        return "A";
    } else if (value > 80){
        return "B";
    } else if (value > 70){
        return "C";
    } else if (value > 60){
        return "D";
    } else {
        return "E";
    }
}

// memanngil function 
const final = getNilai(87);
document.writeln(`<p>${final}</p>`);