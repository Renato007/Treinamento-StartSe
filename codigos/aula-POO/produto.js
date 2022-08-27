"use strict";
export class Produto {
  static GRANDE = 10;
  static MEDIO = 5;
  static PEQUENO = 1;
  codigo;
  titulo;
  valor;
  tamanho;
  constructor(cod, nome, valor, tamanho) {
    this.codigo = cod;
    this.nome = nome;
    this.valor = valor;
    this.tamanho = tamanho;
  }
}
