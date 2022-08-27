'use strict'
import { Musica } from "./musica.js"
import { Produto } from "./produto.js";
const musica1 = new Musica('Minha música', 100);

console.log(musica1.formato);
console.log(Musica.formato);

const produto01 = new Produto(20, 'Meu produto', 35, Produto.GRANDE)
console.log(produto01);

//Atributo Estático de uma Classe em JavaScrip
/* 
declaração static antes do nome do atributo.

static pode servir como um cost dentro do objeto e pode ser acessada ex:Produto.GRANDE.

pode ser utilizada o atributo statico em outras instancias até mesmo istancias de outras classes.

*/