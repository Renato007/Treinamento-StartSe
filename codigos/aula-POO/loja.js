"use strict";

export class Loja {
    #nome;
    #produtos = [];

    constructor(nome){
        this.#nome = nome;
    }

    adicionaProduto(produto){
        this.#produtos.push(produto); //estou adicionando os produtos dentro do produtos da loja
    }

    exibeProdutos(){
        console.log(`Lista de Produtos da loja ${this.#nome}`)
        for (const produto of this.#produtos){
            console.log(produto.getDados());
        }
    }
}