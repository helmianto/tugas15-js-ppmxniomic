const sisi1 = 8;
const sisi2 = 6;

console.log(`Nilai AB : ${sisi1} cm`);
console.log(`Nilai BC : ${sisi2} cm`);
const hasilKuadrat = Math.pow(sisi1, 2) + Math.pow(sisi2, 2);
const hasilAkar = Math.sqrt(hasilKuadrat);
console.log(`Panjang sisi AC pada segitiga siku-siku tersebut adalah : ${hasilAkar} cm`);