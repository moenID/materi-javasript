/* Function dalam function
tidak ada batasan di mana function dibuat
termasuk jika ingin membuat function di dalam sebuah function,
hal tersebut bisa dilakukan.
function yang terdapat di dalam disebut dengan inner function
inner function hanya bisa diakses di tempat membuat functionnya
tidak bisa inner function diakses di luar function
*/



// contoh kode inner function

function outer(){
    function inner(){
        console.info("inner");
    }

    inner()
}


outer();
inner() // error can not access inner function
