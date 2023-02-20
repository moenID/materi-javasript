/* Function Generator
function generator merupakan functiaon untuk membuat data generator
generator sendiri adalah data yang bisa di iterasi seperti array
Untuk membuat function generator, perlu menggunakan tanda *(bintang) setelah kata function
dan untuk mengembalikan data di setiap iterasi, 
bisa menggunakan kata kunci yield diikuti datanya
*/

/* Lazy Evaluation
genertaor bersifat lazy
artinya jika data belum diambil dari generator, maka
yield selanjutnya tidak akan dieksekusi
*/

// contoh kode function generator 

function* createName() {
    yield "Misbah";
    yield "Munir";
    yield "Sawahan";
}

const names = createName();
for (const name of names) {
    document.writeln(`<p> ${name} </p>`);
}

// contoh kode function generator kompleks
function* buatGanjil(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            yield i;
        }
    }
}

const angkaGanjil = buatGanjil(20);
for (const angka of angkaGanjil){
    document.writeln(`<p> ${angka} </p>`);
}

// contoh kode lazy generator
function* buatAngkaGanjil(value) {
    for(let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            console.info(`Perulangan ke ${i}`);
            yield i;
        }
    }
}

const bilanganGanjil = buatAngkaGanjil(30);

console.info(bilanganGanjil.next().value)
console.info(bilanganGanjil.next().value)
console.info(bilanganGanjil.next().value)

// jika dibutuhkan baru diambil, jika tidak dibutuhkan tidak dipanggil