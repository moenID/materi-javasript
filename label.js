/*
label merupakan penanda yang bisa digunakan dengan kata kunci break dan continue
secara defaulf saat melakukan break atau continue, dia akan melakukan
terhadap perulangan dimana kode break dan continue itu dilakukan
dengan menggunakan label, break dan continue terhadap perulangan
bisa dilakukan sesuai keinginan, asalkan menggunakan label
untuk membuat label, gunakan nama label lalu diikuti dengan :(tanda titik dua)
*/

// contoh kode label

loopa:
for(let a = 0; a < 7; a++) {
    loopb:
    for (let b = 0; b < 5; b++){
        document.writeln(`<p>${a} - ${b}</p>`);
    }
}

// contoh kode continue atau break di label
loopi:
for(let i = 0; i < 5; i++) {
    loopJ:
    for (let j = 0; j < 7; j++){
        if ( j > 3){
            continue loopi
        }
        document.writeln(`<p>${i} - ${j}</p>`);
    }
}