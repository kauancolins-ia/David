// importar da bliblioteca prompt-sync
const prompt = require('prompt-sync')();
//informar a bateria
let bateria = parseFloat(prompt('digite a sua bateria: '));

if (bateria >= 75 && bateria <= 100){
    console.log(' Sua bateria esta otima!! ')
}

if (bateria >=50 && bateria <= 74){
    console.log('Sua bateria esta boa')
}

if (bateria >=26 && bateria <=49 ){
    console.log('Sua bateria esta mediana')
}

if (bateria >=1 && bateria <=25 ){
    console.log('Sua bateria esta ruim')
}

if (bateria == 0){
    console.log('Sua bateria esta pessima')
}