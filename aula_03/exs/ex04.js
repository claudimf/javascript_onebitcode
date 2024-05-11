// Faça um programa que faça o usuário advinhar um número aleatório de 0~100 com 3 tentativas e informar a cada tentativa se o número é menor ou maior

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 101); // Gera um número aleatório entre 0 e 100
let attempts = 3;

console.log('Bem-vindo ao jogo de adivinhação!');
console.log('Tente adivinhar o número entre 0 e 100.');

function guessNumber() {
  rl.question('Digite sua tentativa: ', (answer) => {
    const guess = parseInt(answer);

    if (!isNaN(guess)) {
      if (guess === randomNumber) {
        console.log('Parabéns! Você acertou!');
        attempts = 0
        rl.close();
      } else if (guess < randomNumber) {
        console.log('O número é maior. Tente novamente.');
        attempts--;
      } else {
        console.log('O número é menor. Tente novamente.');
        attempts--;
      }

      if (attempts > 0) {
        console.log(`Você tem mais ${attempts} tentativa(s).`);
        guessNumber();
      } else {
        console.log(`Suas tentativas acabaram. O número era ${randomNumber}.`);
        rl.close();
      }
    } else {
      console.log('Por favor, digite um número válido.');
      guessNumber();
    }
  });
}

guessNumber();

// Rodar localmente
// docker compose run --rm app node aula_03/exs/ex04.js