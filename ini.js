// Mendeklarasikan Variabel
let animal;

// Tipe Data JavaScript
let namaSaya ="naysa";
let umurSaya = 16;

// Operator Aritmatika
const penjumlahan = 7 + 8;

const modulus = penjumlahan % 12; // Hasil 15 % 12 = 3

const pangkat = modulus ** 3; // Hasil 3 Pangkat 3 = 27

// Assignmenr Operator
let umur = 10;

umur += 5;
console.log(umur);

// String Operator
let kalimat = 'Hello';

kalimat += ' world';
console.log(kalimat);

// Mendaklarasikan Fungsi
function namaSaya() {
    return "naysaaa"
}

// Paraneter & Argument
function luasPersegi(s) {
    return s * s;
}

let sisi = 4;
let hasilLuas = luasPersegi(sisi);
console.log("luas persegi dengan sisi", sisi, "adalah", hasilLuas);

// Mendeklarasikan Objek
let saya = new Object();

saya.nama = 'nay',
saya.umur = 16

console.log(saya);

// Menambah Properti Baru Pada Objek
let manusia = {};
manusia.ekor = false;
manusia['ekor'] = false;

// Menghapus Properti Objek
let tubuh = {
    roda: 2,
    tangan: 2,
    kaki: 2,
};

delete tubuh.roda;

// Object Methode
let kucing = {
    lucu: true,
    kaki: 4,
    suara: function() {
        return "meong";
    }
};

// Mendeklarasikan Array
let hewan= ["kucing", "panda", "harimau", "jerapah", "kelinci"];
console.log(hewan);

// Mengubah Data/Elemen Pada Array
let warna = ['hitam', 'merah', 'ungu', 'kuning'];

warna[3] = 'biru';

console.log(warna);

// Method Objek Match
let bilangan = 0;

let pow = Math.pow(bilangan, 2,3);
let sqrt = Math.sqrt(16);
let max = Math.max(5, 9, 3, 7);

// Menggunakan if, else if dan else
function ganjilGenap(platNomor) {
    // Tulis kode kalian di dalam fungsi ini
    if (platNomor % 2 === 0){
        return "Genap";
    } else {
        return "Ganjil";
    }
}

// For Loop
let anggka = [1, 46, 75, 12, 89, 54, 101];
let genap = [];

for (let i= 0; i < angka.length; i++) {
    if (angka[i] % 2 ===0) {
        genap.push(angka[i]);
    }
}

// For/Of Loop
let angkaa = [1, 46, 75, 12, 89, 54, 101];
let ganjil = [];

for (const num of angka) {
    if (num % 2 !== 0) {
        ganjil.push(num);
    }
}

// While Loop
let aangka = [];
let a = 5;

while (i >=0) {
    angka.push(a);
    i--;
}

// Do While Loop
let angka = [];
let i = 5;

// Ubah kode loop di bawah ini

do {
  angka.push(i);
  i++;
} while (i < 11);

console.log(angka);
console.log(i);

// Default Parameter
function warnaKesukaan(warna = "putih") {
    return "Warna kesukaan saya adalah " + warna;
}

// Contoh pemanggilan fungsi
console.log(warnaKesukaan());       // Output: "Warna kesukaan saya adalah putih"
console.log(warnaKesukaan("biru")); // Output: "Warna kesukaan saya adalah biru"

// Rest Parameter & Spread Operator
let namaBuah1 = ['apel', 'mangga'];
let namaBuah2 = ['sirsak', 'semangka'];

let semuaNamaBuah = [...namaBuah1, ...namaBuah2];