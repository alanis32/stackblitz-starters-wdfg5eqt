const PF = require('./PF');
class Aluno extends PF {
  #matricula;
  #curso;
  #disciplina; //linguagem tipada
  // começa com termo '20' AND(E) ter 8 caracteres
  setMatricula(matricula) {

    if (matricula) {
      if ((matricula.length === 8) && (matricula.startsWith("20")))   
      {
        this.#matricula = matricula;
        return true;
      } else {
        return false;
      }
  }
  getMatricula() 
  {
    return this.#matricula;
    setCurso(curso) 
    {
      if (curso) {
        if ((curso === 'ADS') || (curso === 'SI')) {
          this.#curso = curso;
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    getCurso()
    {
      return this.#curso;
    }
  }
  module.exports = Alunop;
 /*const aluno = new Aluno();
 aluno.setNome('Alan');
 aluno.setCPF(123.123.765-75);
 aluno.setMatricula('204785873456');
 aluno.setCurso('ADS');
 console.log(aluno.getMatricula());
 console.log(aluno.getCurso());/*