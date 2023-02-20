/*
Closure adalah kombinasi function dan bundel refrensi ke data di sekitarnya
sudah diketahui bahwa local scope tidak bisa diakses di luar scupe
dengan kemampuan closure, kita bisa membuat sebuah function di local scope
dan refrensi di sekitar local scope tersebut keluar dari scopenya.
* closure ini sangat jarang kecuali di kasus spesifik
*/

// contoh kode closure dalam membuat data
 function createAdder(value) {
    const owner = "Misbah"; // local scope
    function add(param) {
        console.info(owner);
        return value + param
    }
    return add 
 }

 const addTwo = createAdder(2);

 /* seakan-akan membuat function 
function addTwo(param) {
    console.info("Misbah")
    return 2 + param
}
 */

 console.info(addTwo(10));
 console.info(addTwo(20));
