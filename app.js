const { addition, subtraction, multiplication, division } = require('./operacoes');
const lodash = require('lodash');

console.log('8 + 4 =', addition(8, 4));
console.log('15 - 7 =', subtraction(15, 7));
console.log('6 * 3 =', multiplication(6, 3));
console.log('20 / 5 =', division(20, 5));
console.log('10 / 0 =', division(10, 0));
console.log('Número aleatório entre 1 e 30:', lodash.random(1, 30));