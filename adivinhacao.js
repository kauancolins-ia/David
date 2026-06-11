const prompt = require('prompt-sync')();

let numero = 7; // número fixo
let chute = parseInt(prompt('Digite seu chute: '));

if (chute > numero) {
    console.log('Maior');
}
else if (chute < numero) {
    console.log('Menor');
}
else {
    console.log('Igual');
}