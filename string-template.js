/* String template merupakan fitur dalam javascript dimana data dari luar string 
bisa disubtitusi ke dalam bentuk string. seperti mengambil 
data variable, atau operasi matematika. Untuk menggunakan String template,
cara pembuatan  string harung menggunakan tanda `(backtick)
bukan tanda '(petik satu) atau "(petik dua).
*/

// contoh kode string template

const name = "Misbahul Munir";
const template = `Name: ${name}`;


document.writeln(template);

document.writeln("<br>");
//kode expresion di string template

const nilai = 77;
const template2 = `Name : ${name}, lulus : ${nilai > 70}`;

document.writeln(template2);

/* 
Multiline String.
string template juga bisa digunakan untuk membuat string multiline.
caranya, tambahkan enter ditextnya.
*/
document.writeln("<br>");


//kode multiline
const multiline = `tutorial ini
dibuat pada malam minggu
21 januari 2020
terima kasih.`

document.writeln("<pre>");
document.writeln(multiline);
document.writeln("</pre>");