// Faça um programa que calcule o fatorial do número digitado pelo usuário

const rl = readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero;

rl.question('Digite um número: ', (num) => {
  numero = parseFloat(num);

  if (numero > 0) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    console.log(`O fatorial do número ${num} é: ${factorial}`);
  } else {
    console.log('Digite um número maior que zero');
  }
  rl.close();
});

// Rodar localmente
// docker compose run --rm app node aula_03/exs/ex02.js