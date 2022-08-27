"use strict";
class Produto {
  codigo;
  nome;
  constructor(cod, nome) {
    this.codigo = cod;
    this.nome = nome;
  }
}
class Disciplina {
  codigo;
  nome;

  constructor(cod, nome) {
    this.codigo = cod;
    this.nome = nome;
  }
}

const d1 = new Disciplina(123, 'Matemática');
const d2 = new Disciplina(133, 'Português');
const p1 = new Produto(123, 'Livro');

const copiaDaDisciplina = d2;

console.log(d1)
console.log(p1)
console.log(d2)

copiaDaDisciplina.codigo = 111;
copiaDaDisciplina.nome ="Expressão e Comunicação"
console.log(d2)
