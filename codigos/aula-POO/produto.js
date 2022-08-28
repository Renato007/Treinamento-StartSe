"use strict";
export class Produto {
  #tipo;
  
  constructor(tipo){
  this.#tipo = tipo;
  }
  getDados(){
    return this.#tipo;
  }
}

