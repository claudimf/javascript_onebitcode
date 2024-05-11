// WHILE
console.log()
console.log("DO WHILE")

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput() {
  rl.question('\nEscolha uma opcao: \n1. teste\n2. teste2\n3. sair\n', (opcao) => {
    if (opcao.trim() === '3') {
      console.log('Voce escolheu sair');
      rl.close();
    } else {
      console.log("Voce escolheu a opcao:" + opcao)
      getUserInput();
    }
  });
}

getUserInput();

// Rodar localmente
// docker compose run --rm app node aula_03/estrutura_de_controle_do_while.js