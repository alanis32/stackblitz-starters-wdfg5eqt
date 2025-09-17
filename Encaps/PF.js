const Pessoa = require('./Pessoas');  // Importa a classe base Pessoa (superclasse)
// 05
const IE = require('./IE/IEclss');   // Importa a classe IEclss para relacionamento posterior

// 06
class PJ extends Pessoa {  // Declaração da classe PJ herdando de Pessoa
// 07
  #cnpj;  // Atributo privado

// 08
  setCNPJ(cnpj) {
    /*
    // 09  Comentários explicando operadores de comparação
    <  : menor que
    >  : maior que
    <= : menor ou igual que
    >= : maior ou igual que
    */
    // 10
    if (cnpj) {
      // 11
      if (cnpj.length < 18) {  // Verifica se o CNPJ possui o tamanho mínimo adequado
        return false;          // Caso contrário, retorna false
      }
      // 12
      this.#cnpj = cnpj;       // Atribui valor ao atributo privado
      return true;
    } else {
      // 13
      return false;            // Retorna false se o campo estiver vazio
    }
  }

// 14
  getCNPJ() {
    return this.#cnpj;         // Retorna o valor do CNPJ
  }

// 15
  // Sobrescrita do método setEmail herdado da classe Pessoa
// 16
  setEmail(email) {
    /*
    // 17  Comentários explicando operadores de igualdade
    ==   : igualdade frouxa
    ===  : igualdade estrita
    !=   : diferença frouxa
    !==  : diferença estrita
    */
    // 18
    if (email !== '') {
      // 19
      if (email.includes('@')) {         // Verifica se o email contém "@" como validação básica
        super.setEmail(email);           // Chama método da superclasse
        return true;
      }
    } else {
      // 20
      return false;                      // Retorna false se string vazia
    }
  }

// 21
  #ie;  // Atributo privado para armazenar objeto do tipo IE

// 22
  setIE(ie) {
    // 23
    if (ie instanceof IE) {             // Verifica se o parâmetro é instância da classe IE
      this.#ie = ie;
      ie.setPJ(this);                   // Referência cruzada (IE também aponta para este PJ)
      return true;
    } else {
      return false;
    }
  }

// 24
  getIE() {
    return this.#ie;                    // Retorna o objeto IE relacionado
  }

} // fim da classe

// 25
module.exports = PJ; // Exporta a classe para uso externo

