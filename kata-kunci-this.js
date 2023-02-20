/* Kata Kunci This
kata kunci this merupakan refrensi ke object milik siapa
tiap lokasi kata kunci this, bisa berbeda-beda refrensi pemiliknya
Dalam object method, this merupakan refrensi ke object pemilik functionnya
di global scope, this merupakan refrensi ke global object (di browser biasanya window)
dalam function, this merupakan refrensi ke global object (di browser biasanya window)
di function dengan strict mode (akan di bahas nanti), this adalah undefined 
dalam event, this merupakan refrensi ke element yang menerima event
(dalam materi Document Object Model) 
*/

// contoh kode this di global scope
console.info(this); //Window ( window adalah browser itu sendiri)

// contoh kode this dalam function
function sample() {
    console.info(this);

    function inner() {
        console.info(this);
    }
    inner();
}

sample();

// contoh kode this dalam Object Method

const person = {
    name: "Misbah",
    sayHello: function (value) {
        console.info(this) // this di sini person
        console.info(`Hello ${value}, my name is ${this.name}`)
    }
}

person.sayHello("Munir");
