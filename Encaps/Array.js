/* //Forma 1 :
var dadosAluno = ['Joao' , 12345, true];
console.log(dadosAluno);
//console.log(dadosAluno[0]);

//forma 2 :
var curso = [];
curso[0] = 'ADS'; 
curso[1] = 2025;
curso[3] = 'Computacao'
//console.log(Curso);

//forma 3 :
var notas = new Array(7.5,8.9)
//console.log(notas);

//forma 4 :
var frutas = [];
frutas.push("maça");//adicionar ao final
frutas.push("banana");
frutas.unshift("uva");//adicionar ao inicio

frutas.pop();//remove do final
frutas.shift();//remover do inicio
frutas.splice(0,1); // elemento para tirar do indici, e quantidades para tirar da posição
frutas.splice(0,0,"morango"); // posso colocar varios no meio do array

console.log(frutas);
console.log(frutas.length);*/


const Alunop = require ('./Alunop');
 const obj1 = new Aluno();
 obj1.setNome('Pedro');
 obj1.setMatricula('20250001');
 console.log(obj1);

 const obj2 = new Aluno();
 obj2.setNome('Maria');
 obj2.setMatricula('20250002');
 console.log(obj2);

 var objetos = []
 objetos.push(obj1);
 objetos.push(obj2);
 console.log(objetos);
 console.log(objetos[0].getNome());