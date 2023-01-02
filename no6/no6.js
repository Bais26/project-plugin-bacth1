let kalimat = "Hello! World!"
let ucapan = kalimat.split('!')
let hasil = ucapan.filter(ucapan => ucapan!== "!")
console.log(hasil);