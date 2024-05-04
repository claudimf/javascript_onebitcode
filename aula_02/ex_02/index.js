// Escreva um programa JS que funcione como uma calculadora simples.
// O programa deve pedir ao usuário para inserir dois números usando
// prompt(). realizar as 4 operações matemáticas(adição, subtração
// multiplicação e divisão) com esses números e exibir o resultado
// usando alert().
const numero_um = parseFloat(prompt('Escreva o primeiro numero:'))
const numero_dois = parseFloat(prompt('Escreva o segundo numero:'))

alert(
    `Resultado:
+ -> ${numero_um + numero_dois}
- -> ${numero_um - numero_dois}
* -> ${numero_um * numero_dois}
/ -> ${numero_um / numero_dois}`
    )