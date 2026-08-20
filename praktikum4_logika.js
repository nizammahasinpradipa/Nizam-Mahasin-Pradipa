let umur = 17;
let punyaKTP = false;
let punyaSIM = false;

/// boleh naik motor sendiri jika umur >= 17 //
// DAN sudah punya SIM//

let bolehNaikMotor = (umur >= 17) && punyaSIM;

// dianggap "remaja" jika umur >= 13 ATAU //
// belum punya ktp //

let statusRemaja = (umur >= 13) || !punyaKTP;

console.log("Boleh naik motor: " + bolehNaikMotor)
console.log("Status remaja: " + statusRemaja)