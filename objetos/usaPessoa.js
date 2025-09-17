const Pessoa = require('./Pessoa'); //importei a classe

const joao = new Pessoa(80, 1.80);
console.log(`IMC de joao: ${joao.IMC().toFixed(2)}`);
console.log(`peso de joao: ${joao.peso}kg`);

const maria = new Pessoa(54, 1.64);
console.log(`IMC de maria: ${maria.IMC().toFixed(2)}`);
console.log(`peso de maria: ${maria.peso}kg`);