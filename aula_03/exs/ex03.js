// Faça um programa que calcule a média aos números digitados ou saia do programa ao digitar -1

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = 0;
let count = 0;

function calculateAverage() {
  if (count === 0) {
    console.log('Nenhum número válido');
    return;
  }

  const average = sum / count;
  console.log(`A média é: ${average}`);
}

function getUserInput() {
  rl.question("Digite o valor da nota(0~10) ou '-1' para exibir a média: ", (answer) => {
    const value = parseFloat(answer);

    if (value === -1) {
      calculateAverage();
      rl.close();
    } else if (value > 0 && value <= 10) {
      sum += value;
      count++;
      getUserInput();
    } else {
      console.log('Entrada inválida, por favor digite um número maior que 0');
      getUserInput();
    }
  });
}

getUserInput();

// Rodar localmente
// docker compose run --rm app node aula_03/exs/ex03.js