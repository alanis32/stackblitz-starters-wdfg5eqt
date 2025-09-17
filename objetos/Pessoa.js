/* -- comentário de bloco 
Classe - Estrutura que eu representar
 --> atributos ( caracteristicas, propriedades)
 --> métodos ( ações, funcionalidade)
 -- Objeto - instancia da classe
 para cada classe um unico arquivo
*/
class Pessoa {
  constructor (peso, altura) 
   {
       this.peso = peso;
       this.altura = altura;
   }
       imc ()
   { 
       let imc = this.peso / ( this.altura * this.altura);
       return imc;
   }
}
module.exports = Pessoa;