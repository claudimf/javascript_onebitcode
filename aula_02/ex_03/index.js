// Escreva um programa JS que calcule a área e o perímetro de um triângulo
const lado1 = parseFloat(prompt('O comprimento do L1:'))
const lado2 = parseFloat(prompt('O comprimento do L2:'))
const lado3 = parseFloat(prompt('O comprimento do L3:'))

const perimetro = lado1 + lado2 + lado3

// "Fórmula de Heron"

const p = (perimetro/2) // semiperimetro

const area = Math.sqrt(p*(p-lado1)*(p-lado2)*(p*lado3))

alert(
    `Resultado:
area -> ${area}
perimetro -> ${perimetro}`
    )