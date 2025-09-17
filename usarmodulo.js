// comando que importa as funcoes somar() e subtrair() para serem reultilizadasa
const calculadora = require('./bib/criamodulo.js');
var x = 10, y = 30;
console.log(calculadora.somar(x,y));
console.log(calculadora.subtrair(y,x));
console.log(calculadora.multiplicar(x,y));
//é necessário implementar as functions dividir () e multiplicar() na biblioteca definemodulo.js