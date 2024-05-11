// SWITCH CASE
console.log()
console.log("SWITCH CASE")

const paisDeOrigem = 'Brasil'

switch (paisDeOrigem) {
    case 'Brasil':
        console.log('Você é brasileiro');
        break;
    case 'Espanha':
        console.log('Você é espanhol');
        break;
    default:
        console.log('Nacionalidade nao identificada');
  }

// Rodar localmente
// docker compose run --rm app node aula_03/estrutura_de_controle_switch.js