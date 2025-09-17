const Aluno = require ('./escola/usaAluno') 
const joao = new Aluno();
joao.setMatricula(12345);
joao.escola = "IFB";
joao.setCurso('Programção de FrontEnd')
console.log(joao.getMatricula())
console.log(joao.getCurso());
console.log(`Escola : ${joao.escola}`);
