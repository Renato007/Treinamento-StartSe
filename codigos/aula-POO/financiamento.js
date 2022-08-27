'use strict'
class Financiamento {
    valorFinanciamento;
    taxaJuros;
    numero = 0;
    constructor (valorFinanciamento, taxaJuros, numero){
        this.valorFinanciamento = valorFinanciamento;
        this.taxaJuros = taxaJuros;
        this.numero = numero;
    }
}
const fin =new Financiamento(10000, 1, 10);
const fin2 =new Financiamento(10000, 2);
console.log(fin);
console.log(fin2);

/* 
Declarando Atributos de uma classe em JavaScript

observações:
Não declaramos o var , let e const antes do atributo da classe.

ordem de sobreposição:
1 -Quando atribuido na criação do objeto 
2- atribuido o valor junto na declaração do atributo dentro classe

*/