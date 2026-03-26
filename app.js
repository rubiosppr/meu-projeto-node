const { adicao, subtracao, multiplicacao, divisao } = require("./operacoes");
const lodash = require("lodash");

console.log("8 + 4 =", adicao(8, 4));
console.log("15 - 7 =", subtracao(15, 7));
console.log("6 * 3 =", multiplicacao(6, 3));
console.log("20 / 5 =", divisao(20, 5));
console.log("10 / 0 =", divisao(10, 0));
console.log("Número aleatório entre 1 e 30:", lodash.random(1, 30));