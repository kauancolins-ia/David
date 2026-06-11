const prompt = require('prompt-sync')();

let valor = parseFloat(prompt('Digite o valor da compra: R$ '));

if (valor > 500) {
    valor = valor - (valor * 15 / 100);
}
else if (valor > 200) {
    valor = valor - (valor * 10 / 100);
}

console.log('Valor final: R$ ' + valor);