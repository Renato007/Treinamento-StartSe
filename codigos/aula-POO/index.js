'use strict'
import { Produto } from "./produto.js";
import { Livro } from "./livro.js";
import { Loja } from "./loja.js";
import { Cliente } from "./cliente.js";

const prod = new Produto('Generico');
const livro01 = new Livro('Livro','Javascript moderno', 50);
const livro02 = new Livro('Livro','Javascript Avançado', 200);

const minhaLoja = new Loja('MinhaLoja');
minhaLoja.adicionaProduto(prod);
minhaLoja.adicionaProduto(livro01);
minhaLoja.adicionaProduto(livro02);
minhaLoja.exibeProdutos();

const c1 = new Cliente('Ana');
c1.setGasto(500);
c1.getBeneficios();
c1.setGasto(500);
c1.getBeneficios();


//Declarando Métodos de uma Classe
/* 


*/