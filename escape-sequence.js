/* escape sequence merupakan karekter khusus di javascript
untuk menambahkan ENTER, TAB, tanda kutip dua (") dan lain-lain
berikut ini contoh escape sequence untuk string yang sering digunakan di javascript:
1. \n untuk ENTER
2. \t untuk TAB
3. \' untuk tanda petik satu (')
4. \" untuk tanda petik dua (")
5. \\ untuk tanda slash (\)

escape sequence diperlukan untuk menghindari error code 
pada javascript ketika ingin menambahkan tipe data string yang memuat tanda petik satu ataau dua
mengingat penulisan string harus disertai tanda petik satu atau dua. */

// contoh penerapan escape sequense
/* tag textarea untuk memperlihatkan apakah benar-benar
terdapat enter atau tidak, karena jika tidak mengggunakan
textare efek enter atau tab tidak terlihat */

document.writeln("<textarea cols='100' rows='10'>");
document.write("Misbahul \nMunir\n");
document.write("\'Start \'Moen\n");
document.write("\"Ecosystem Web\"\n");
document.write("\\Javascript \\Dasar\n");
document.writeln("</textarea>");
