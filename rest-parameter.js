/* Rest Parameter
Rest Parameter merupakan fitur dimana data bisa dikirim sebanyak mungkin
pada satu parameter dan secara otomatis akan dikonversi menjadi Array
Untuk membuat rest parameter, ada ketentuannya
Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu
rest parameter hanya boleh berada di posisi paling akhir, tidak boleh
di depan atau di tengah, kecuali memang cuma ada satu parameter
di bahasa pemograman lain, ada juga yang bilang ini adalah variable argument
*/

// contoh kode rest paremeter

function sum(name, ...data){
    let total = 0
    for (const item of data){
        total += item;
    }

    document.writeln(`<p> Total ${name} is ${total}</p>`)
}

// pemanggilan function

sum("Orange", 2, 3, 4, 6, 7, 8);
sum("Apple", 2, 4, 7, 9, 5, 7, 8);
sum("Banana", 1, 2, 3, 4, 5, 6, 7);


// spred syntax

// kadang data terlanjur berupa array
// tapi untungnya data array bisa di kirim ke rest parameter
// caranya bisa menggunakan ... (titik 3 kali) diikuti dengan arraynya
// ketika memangggil function

// contoh kode sppred syntax di rest parameter

function newSum(nama, ...date) {
    let total = 0
    for (const itim of date) {
        total += itim;
    }
    document.writeln(`<p> Total ${nama} is ${total}</p>`);
}

newSum('Merah', ...[2, 3, 4, 5, 6]);
newSum('Biru', ...[4, 6, 7, 9, 8]);
newSum('Merah', ...[1, 2, 4, 6, 7]);