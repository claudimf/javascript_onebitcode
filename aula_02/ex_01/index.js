// Escreva um programa JS que peça ao usuário para inserir um frase
// usando o prompt(). Em seguida, o programa deve contar o número
// de caracteres na frase(incluindo espaços em branco) e exibir 
// esse número usando alert().

const frase = prompt('Escreva uma frase')

const numero = frase.length

alert(`o número de caracteres é: ${numero}`)