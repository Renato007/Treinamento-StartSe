"use strict";
export class Produto {
  descricao;
  largura;
  altura;
  profundidade;
  valor;
  
  constructor(cod, largura, altura, profundidade, valor) {
    this.descricao = cod;
    this.largura = largura;
    this.altura = altura;
    this.profundidade = profundidade;
    this.valor = valor;
  }
  volumeProduto(){
    return this.largura * this.altura * this. profundidade;
  }
  parcelaValor(parcelas){
    return this.valor / parcelas
  }
}

