const Pessoas = require('./Pessoas');  // Importa a classe base Pessoa (superclasse)
const IE = require('./IE/IEclss');   // Importa a classe IEclss para relacionamento posterior
class PJ extends Pessoas {  // Declaração da classe PJ herdando de Pessoa
  #cnpj;  // Atributo privado
  setCNPJ(cnpj) {
    if (cnpj) {
      if (cnpj.length < 18) {  // Verifica se o CNPJ possui o tamanho mínimo adequado
        return false;          // Caso contrário, retorna false
      }
      this.#cnpj = cnpj;       // Atribui valor ao atributo privado
      return true;
    } else {
      return false;    // Retorna false se o campo estiver vazio
    }
  }

  getCNPJ() {
    return this.#cnpj;         // Retorna o valor do CNPJ
  }
  setEmail(email) {
   
    if (email !== '') {
      if (email.includes('@')) {         // Verifica se o email contém "@" como validação básica
        super.setEmail(email);           // Chama método da superclasse
        return true;
      }
    } else {
      return false;                      // Retorna false se string vazia
    }
  }
  #ie;  // Atributo privado para armazenar objeto do tipo IE
  setIE(ie) {
    if (ie instanceof IE) {             // Verifica se o parâmetro é instância da classe IE
      this.#ie = ie;
      ie.setPJ(this);                   // Referência cruzada (IE também aponta para este PJ)
      return true;
    } else {
      return false;
    }
  }

  getIE() {
    return this.#ie;                    // Retorna o objeto IE relacionado
  }

} 

module.exports = PJ; // Exporta a classe para uso externo
