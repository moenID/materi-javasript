/*
pada switc statement terdapat kata kunci break yaitu untuk
menghentikan case pada switch
sama dengan perulangan, break digunakan untuk menghentikan seluruh perulangan
namun, terdapat berbeda dengan continue, continue digunakan untuk 
menghentikan perulangan saat ini, lalu melanjutkan 
perulangan selanjutnya,
*/

// contoh kode break
let bilangan = 1;
while (true){
    document.writeln(`<p> Nomor ke ${bilangan}</p>`);
    bilangan++

    if (bilangan > 10){
        break;
    }
};

// contoh kode continue
for (let i = 1; i <= 100; i++){
    if (i % 2 === 0){
        continue;
    }
    document.writeln(`<p> Perulangan Ganjil ${i}</p>`)
}