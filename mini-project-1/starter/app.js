const heading = document.querySelector('.heading-title');

heading.innerHTML = 'Title Baru'; 

let kali = 500 * (7 + 5) + 6

console.log(kali)

let number = "3" + "3" - "tes";

console.log(number)

let biodataDiri = {
	ayah: {
		nama: 'Doni',
		umur: 52,
		jenisKelamin: 'Pria',
		makananFavorit: ['Burger', 'Pisang'],
	},
	ibu: {
		nama: 'Sinta',
		umur: 43,
		jenisKelamin: 'Wanita',
		makananFavorit: ['Soto', 'Donat'],
	},
	anak: {
		nama: 'Deri',
		umur: 7,
		jenisKelamin: 'Pria',
		makananFavorit: ['Es', 'Nugget'],
	},
};

console.log(biodataDiri.ayah.makananFavorit[1])