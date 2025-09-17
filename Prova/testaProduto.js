const Produto = ('./Produto');

const p = new Produto();
let resultado = p.setNome('Arroz');
console.log(resultado); //true
console.log(p.getNome());//arroz

resultado = p.setPreco(12.5);
console.log(resultado);//true
console.log(p.getpreco()); //12.5