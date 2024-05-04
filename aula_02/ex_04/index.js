// Escreva um programa JS que calcule o preço final com desconto
const preco = parseFloat(prompt('Preco(R$):'))
const desconto = parseFloat(prompt('Desconto(%):'))

alert(
    `Preco final: R$${preco*((100-desconto)/100)}`
    )