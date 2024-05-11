// Importamos o lodash com um nome customizado
import _ from 'lodash';

// Executa a função kebabCase
let frase = "Esta é uma Frase de Exemplo";
let fraseKebabCase = _.kebabCase(frase);
console.log(fraseKebabCase);

frase = "Este é um Título Fictício Para um Artigo";
fraseKebabCase = _.kebabCase(frase);
console.log(fraseKebabCase);