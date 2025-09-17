Class Produto
{
 #nome;
 #preco;
 setNome(nome)
 {
   this.#nome = nome;
   return true;
 } else {
   return false;
 }
}
getNome() { return this.#nome;
}
setPreco(preco)
{if (preco > 0){
  this.#preco = preco;
  return true;
} else {
  return false;
}
}
getPreco() {return this.#preco; }
}
module.exports = Produto;
