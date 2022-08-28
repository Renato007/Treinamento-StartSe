'use strict'
import { Produto } from "./produto.js";
import { Livro } from "./livro.js";
import { Loja } from "./loja.js";


const prod = new Produto('Generico');
const livro01 = new Livro('Livro','Javascript moderno', 50);
const livro02 = new Livro('Livro','Javascript Avançado', 200);

const minhaLoja = new Loja('MinhaLoja');
minhaLoja.adicionaProduto(prod);
minhaLoja.adicionaProduto(livro01);
minhaLoja.adicionaProduto(livro02);
minhaLoja.exibeProdutos();

//Declarando Métodos de uma Classe
/* 


*/