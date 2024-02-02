// Menggunakan if, else if dan else
function ganjilGenap(platNomor) {
    if (platNomor % 2 === 0){
        return "Genap";
    } else {
        return "Ganjil";
    }
}

console.log(ganjilGenap(10))

console.log(ganjilGenap(15))