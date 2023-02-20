/* Debugger
Debugger digunakan untuk melakukan debugging
debugger adalah proses mencari bug (masalah) yang terjadi di kode program
dengan debugger, bisa menghentikan kode program di posisi yang diinginkan (breakpoint) seperti pause, 
lalu melihat semua isi variable yang ada pada saat kode program sedang berhenti.
*/

// contoh kode untuk debugger

function createFullName(firstName, midddleName, lastName) {
    debugger;
    const fullName = `${firstName} ${lastName} ${lastName}`;
    return fullName;
}

const name = createFullName("Misbah", "Munir", "Adrik");
document.writeln(`<p> ${name} </p>`);
