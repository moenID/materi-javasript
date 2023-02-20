/* Getter and Setter
Getter dan Setter merupakan kemampuan membuat function yang berbeda
untuk mengambil data (getter) dan mengubah data (setter) pada sebuah property di Object
dengan menggunakan Getter dan Setter hal apapun bisa dilakukan,
dalam function sebelum sebuah property diakses atau diubah, misalnya menambah
validasi dan lain-lain.
*/

// contoh kode Getter
const person = {
    firstName: "Misbah",
    lastName: "Munir",
    get fullName() {
        return `<p>${this.firstName} ${this.lastName}</p>`;
    },
// contoh kode setter
    set fullName(val) {
        const array = val.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }

}


person.fullName = "Muhammad Adrik";
document.writeln(person.firstName);
document.writeln(person.lastName);
document.writeln(person.fullName); // otomatis mengambil get fullName
