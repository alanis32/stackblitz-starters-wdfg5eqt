const Telefone = require('./Telefone');
const Endereco = require('./Endereco');
class Pessoas {
   #nome;
   #email;
#endereco;         // relacionamento simples de 1 para N
#telefones = [];   // relacionamento simples de N para N
setEndereco(endereco) {
  if (endereco instanceof Endereco) {
    this.#endereco = endereco;
    endereco.setPessoa(this); // referência cruzada
    return true;
  } else {
    return false;
  }
}
getEndereco() {
  return this.#endereco;
}
addTelefone(telefone) {
  if (telefone instanceof Telefone) {
    this.#telefones.push(telefone);
    telefone.setPessoa(this); // referência cruzada
    return true;
  } else {
    return false;
  }
}
getTelefones() {
  return this.#telefones;
}

setNome(nome) {
  if (nome) {
    this.#nome = nome;
    return true;
  } else {
    return false;
  }
}
getNome() {
  return this.#nome;
}
setEmail(email) {
  if (email) {
    this.#email = email;
    return true;
  } else {
    return false;
  }
}
getEmail() {
  return this.#email;
   }
}
module.exports = Pessoas;