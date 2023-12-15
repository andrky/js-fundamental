
// const array = [1,2,3,4,5,6];
// array.shift();
// console.log(array)

// // Array Slice
// const hewan = ['gajah', 'burung', 'monyet', 'kura', 'sapi']
// let sliceHewan = hewan.slice(1, 3); // Mengambil burung dan monyet
// let sliceHewan1 = hewan.slice(2); // Mengambil monyet dst
// console.log(sliceHewan1);

// // Array Splice
// const hewan = ['gajah', 'burung', 'monyet', 'kura', 'sapi']
// hewan.splice(1, 3); // Menghapus Burung, monyet, kura / hapus hewan[1] sd hewan[3]
// hewan.splice(2); // Menghapus monyet dst
// hewan.splice(1, 1, "Coro"); // Mengganti value dari burung ke coro
// hewan.splice(1, 4, "Utuk"); // Mengganti burung menjadi utuk dan menghapus monyet dan sapi / hapus hewan[2] sd hewan[4]
// console.log(hewan);

// Array ForEach
// const hewan = ['gajah', 'burung', 'monyet', 'kura', 'sapi'];
// hewan.forEach(myFunction);

// function myFunction(value) {
//   console.log(value + ' Kurban');
// }

// Array Map
// const number = [1,2,3,4,5,6]
// const numberMul = number.map(functionKali);

// function functionKali(value) {
//   return value * 2;
// }

// console.log(numberMul);

// Array Filter
// const umur = [10,50,30,24,45,11,23,7,9,23,59,34];
// let filteredUmur = umur.filter(myFunction);

// function myFunction(value) {
//   return value <= 15;
// }

// console.log(filteredUmur);

// // Function
// // Function Definition
// const perpangkatan = function (n) {
//   return n * n;
// }

// // Function Declaration
// function pangkat(n) {
//   return n * n;
// }

// function sayHello(n) {
//   alert('Halo');

//   return n;
// }

// const tes = n => n * n;
// console.log(perpangkatan(5));

// let kali = 500 * (7 + 5) + 6
// console.log(kali)

// let number = "3" + "3" - "tes";
// console.log(number)

// // Object
// let biodataDiri = {
// 	ayah: {
// 		nama: 'Doni',
// 		umur: 52,
// 		jenisKelamin: 'Pria',
// 		makananFavorit: ['Burger', 'Pisang'],
// 	},
// 	ibu: {
// 		nama: 'Sinta',
// 		umur: 43,
// 		jenisKelamin: 'Wanita',
// 		makananFavorit: ['Soto', 'Donat'],
// 	},
// 	anak: {
// 		nama: 'Deri',
// 		umur: 7,
// 		jenisKelamin: 'Pria',
// 		makananFavorit: ['Es', 'Nugget'],
// 	},
// };
// console.log(biodataDiri.ayah.makananFavorit[1])

// const orang = new Object();
// orang.namaLengkap = "Ananda";
// orang.namaBelakang = "Rizky";
// orang.umur = 23;

// console.log(orang);

// Object Keys
// const object1 = {a: 1, b: 2, c: 3};
// const object2 = {c: 5, d: 10};

// console.log(Object.keys(object1));
// Object.assign(object1,object2);
// console.log(object1);

// const mahasiswa = [
//   {
//     nama: "Ananda Rizky",
//     nilai: 95,
//     status: "lulus"
//   },
//   {
//     nama: "Dinda",
//     nilai: 70,
//     status: "tidak lulus"
//   },
//   {
//     nama: "Soni",
//     nilai: 85,
//     status: "lulus"
//   },
//   {
//     nama: "Kipli",
//     nilai: 65,
//     status: "tidak lulus"
//   }
// ];

// const kelulusanMhs = mahasiswa.filter(myFunction);

// function myFunction(value) {
//   if (value.nilai >= 75) {
//     return value
//   }
// }

// const kelulusanMhs = mahasiswa.filter(value => {
//   if (value.nilai >= 75) {
//     return value
//   }
// })

// console.log(kelulusanMhs)

// // Scope
// const globalVar = "Anjay"
// function myFunction() {
//   const name = "Iky";
//   function tesFunction() {
//     console.log(globalVar);
//   }
//   tesFunction();
// }