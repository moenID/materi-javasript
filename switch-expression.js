/*
if statement digunakan untuk kondisi yang sederhana 
sedangkan switch statement merupakan statement percabangan 
yang sama dengan if, namun lebih sederhana pembuatannya.
kondisi di switch statement hanya untuk perbandingan ==
*/ 

// contoh kode switch statement
const nilai = "D";

switch (nilai){
    case "A": // case seperti else if
        document.writeln("<p> Anda lulus dengan nilai terbaik");
        break;
    case "B":
    case "C":
        document.writeln("<p>Anda Lulus</p>");
        break;
    case "D":
        document.writeln("<p>Anda tidak lulus</P>");
        break;
    default:
    document.writeln("<p> Mungkin Anda Salah Jurusan</p>");
}