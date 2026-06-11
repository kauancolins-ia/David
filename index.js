const prompt = require('prompt-sync')();

// Entrada de dados
let num1 = parseFloat(prompt('Digite o primeiro número: '));
let num2 = parseFloat(prompt('Digite o segundo número: '));
let operador = prompt('Digite o operador (+, -, *, /): ');

let resultado;

// Processamento
if (operador === '+') {
    resultado = num1 + num2;
} else if (operador === '-') {
    resultado = num1 - num2;
} else if (operador === '*') {
    resultado = num1 * num2;
} else if (operador === '/') {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        console.log('Erro: divisão por zero!');
    }
} else {
    console.log('Operador inválido!');
}

// Saída
if (resultado !== undefined) {
    console.log(`Resultado: ${num1} ${operador} ${num2} = ${resultado}`);
}




