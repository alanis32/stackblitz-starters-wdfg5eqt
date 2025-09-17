// 01 // localStorage Simulado. localStorage e sessionStorage não funcionam no Node.js puro, somente através do Browser
// 02 // classe construída dentro da pasta "/pessoas/DAOs/PFDAO.mjs"

import { localStorage } from './localStorage.mjs'; // Importa a simulação de localStorage
import PF from '../PF.js'; // Importa a classe PF (Pessoa Fisíca)

export default class PFDAO {  // Declara classe PFDAO que será exportada como default

  #pf; // Atributo privado que armazena a instância de PF

  constructor(pf) { // Construtor da classe PFDAO
    if (pf instanceof PF) {   // Verifica se o objeto passado é uma instância de PF
      this.#pf = pf; // Atribui ao atributo privado
    }
  }

  toJSON() { // Constrói uma representação em JSON da instância de PF
    let fones = [];   // Cria array para armazenar os telefones

    for (let fone of this.#pf.getTelefones()) { // Itera sobre os telefones associados à PF
      fones.push({   // Adiciona ao array um objeto com DDD e número
        ddd: fone.getDdd(),
        numero: fone.getNumero(),
      });
    }

    return {  // Retorna objeto literal que representa todos os dados relevantes da PF
      nome: this.#pf.getNome(),
      email: this.#pf.getEmail(),
      cpf: this.#pf.getCPF(),
      endereco: {
        logradouro: this.#pf.getEndereco().getLogradouro(),
        cep: this.#pf.getEndereco().getCep(),
      },
      telefone: fones,
      ie: {
        numero: this.#pf.getIE().getNumero(),
        estado: this.#pf.getIE().getEstado(),
        dataRegsitro: this.#pf.getIE().getDataRegistro(),
      }
    };
  }

  saveJSON() {   // Método para salvar o objeto PF em formato JSON no localStorage
    // transforma em string JSON usando stringify() e armazena
    localStorage.setItem("pf", JSON.stringify(this.toJSON())); 
  }

  recoveryJSON() { // Método para recuperar os dados de PF armazenados
    // recupera a string armazenada e transforma em JSON usando parse()
    return JSON.parse(localStorage.getItem("pf"));  
  }

}  
