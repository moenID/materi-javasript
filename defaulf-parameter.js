/* Default Parameter
parameter di function javascript juga bisa diberi value default, 
artinya jika ketika data tidak dikirim ke parameter, atau data undefined, maka
secara otomatisnparameter akan diisi oleh default value.
*/

// contoh kode 
function resgister(name, gender = "UNKNOWN"){
    document.writeln(`<p> ${name} </p>`);
    document.writeln(`<p> ${gender}</p>`)
}

resgister("Misbahul", "MALE");
resgister("Munir");
resgister("Adrik", undefined);
