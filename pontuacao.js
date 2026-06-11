const prompt = require('prompt-sync')();

let pontos = parseInt(prompt('Digite a pontuação do jogador: '));

if (pontos > 1000) {
    console.log('Categoria: Mestre');
}
else if (pontos >= 500) {
    console.log('Categoria: Avançado');
}
else {
    console.log('Categoria: Iniciante');
}