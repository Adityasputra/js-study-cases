let harga = 100000;
let diskon = 20;
let hargaDiskon = harga - (harga * diskon / 100);

const hargaAkhir = harga - hargaDiskon;

console.log("Harga Awal: " + harga);
console.log("Diskon: " + diskon + "%");
console.log("Harga Setelah Diskon: " + hargaDiskon);
console.log("Harga Akhir: " + hargaAkhir);