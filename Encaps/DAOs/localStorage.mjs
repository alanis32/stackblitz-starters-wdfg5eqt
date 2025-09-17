// 01 // Classe que simula o localStorage no Node.js do Stackblitz
// 02 // Definida na pasta "/pessoas/DAOs/localStorage.mjs"

export const localStorage = {   // Exporta um objeto constante chamado 'localStorage'

  store: {},  // Objeto interno que funciona como "banco de dados" em memória

  setItem(key, value) {  // Simula a função localStorage.setItem()
    this.store[key] = value;  // Armazena o valor associado à chave informada
  },

  getItem(key) { // Simula a função localStorage.getItem()
    return this.store[key] || null;   // Retorna o valor ou null, caso a chave não exista
  },

  removeItem(key) {    // Simula a função localStorage.removeItem()
    delete this.store[key];      // Remove a chave do armazenamento
  },

  clear() {          // Simula a função localStorage.clear()
    this.store = {};        // Limpa todos os dados armazenados
  }

};       // Fim do objeto exportado

