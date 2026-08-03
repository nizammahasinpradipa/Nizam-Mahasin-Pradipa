//Ini adalah pesan dari coder: tolong jangan dihujat,saya baru beberapa hari ngoding//

//Membuat Kartu Identitas Siswa//
 
console.log('KARTU IDENTITAS SISWA');

const nama = 'Nizam Mahasin Pradipa';
const kelas = 'X RPL 2';
const jurusan = 'RPL'
const sekolah = 'SMK Telkom Malang'
let uangSaku = null
let umur = 15
 
console.log('Nama: ' + nama, 'Dengan tipe data: ' + typeof nama);
console.log('Kelas: ' + kelas, 'Dengan tipe data: ' + typeof kelas);
console.log('Jurusan: ' + jurusan, 'Dengan tipe data: ' + typeof jurusan);
console.log('Sekolah: ' + sekolah, 'Dengan tipe data: ' + typeof sekolah);
console.log('Uang Saku: ' + uangSaku, 'Dengan tipe data: ' + typeof uangSaku);
console.log('Umur: ' + umur, 'Dengan tipe data: ' + typeof umur);


//Saya mencoba Membuat Object Biodata Siswa//

const biodataSiswa = {
    nama: 'Nizam Mahasin Pradipa',
    kelas: 'X RPL 2',
    jurusan: 'RPL',
    sekolah: 'SMK Telkom Malang',
    hobi: ['Coding', 'Gaming', 'Membaca'],  
    nilai: {
        math: 99,
        english: 99
    }
};
 
//mencoba menambah dan menghapus properti dari object biodataSiswa//

delete biodataSiswa.hobi;
biodataSiswa.kota = 'Malang';


//memanggil object biodataSiswa ke console//

console.log(
    biodataSiswa
);

