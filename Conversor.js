const prompt = require('prompt-sync')();

// Entrada
let real = parseFloat(prompt('Digite o valor em Reais (R$): '));
let moeda = prompt('Digite a moeda (USD, EUR ou GBP): ');

let resultado;

// Conversão (cotações de exemplo)
if (moeda == 'USD') {
resultado = real / 5.50;
console.log(`R$ ${real} = US$ ${resultado.toFixed(2)}`);
}
else if (moeda == 'EUR') {
resultado = real / 6.30;
console.log(`R$ ${real} = € ${resultado.toFixed(2)}`);
}
else if (moeda == 'GBP') {
resultado = real / 7.40;
console.log(`R$ ${real} = £ ${resultado.toFixed(2)}`);
}
else {
console.log('Moeda inválida!');
}
