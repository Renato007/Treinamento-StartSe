'use strict'
class Filme {
    constructor (titulo, ano){
        this.titulo = titulo;
        this.ano = ano;
    }
}

let meuFilme = new Filme('Aprendendo Javascript', 2022)

console.log(typeof meuFilme);
console.log(meuFilme)
console.log(meuFilme.ano)
console.log(meuFilme.titulo);

meuFilme.classificacao = 5;
console.log(meuFilme)
/* 
Declaração de uma Classe
Método construtor de Classe
objervações:
Na hora de istanciar um objeto o número de argumentos é igual ao numero de parametro do construtor. Se exceder será ignorado. 
Quando usamos o this. com um nome de um atributo novo. Estamos criando uma nova atribuição que atenderá ao objeto instanciado.
*/