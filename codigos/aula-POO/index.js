'use strict'
import { Musica } from "./musica.js"
import { Produto } from "./produto.js";
const musica1 = new Musica('Minha música', 100);

console.log(musica1.formato);
console.log(Musica.formato);

const produto01 = new Produto(20, 'Meu produto', 35, Produto.GRANDE)
console.log(produto01);

const prod =new Produto('Refrigerante', 10, 3, 2, 20);

console.log(prod.volumeProduto())
console.log(prod.parcelaValor(2))

//Declarando Métodos de uma Classe
/* 


*/