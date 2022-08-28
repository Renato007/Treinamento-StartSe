'use strict'
export class Laboratorio{
    #nome;
    #capacidade;

    constructor(nome, capacidade){
        this.#nome = nome;
        this.#capacidade = capacidade;
    }
    
    getNome(){
        return this.#nome;
    }
    getCapacidade(){
        return this. #capacidade;
    }
    setNome(nome){
        this.#nome = nome;
    }
    setCapacidade(capacidade){
        this.#capacidade = capacidade;
    }
}