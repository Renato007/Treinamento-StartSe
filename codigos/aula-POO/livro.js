"use strict";

import { Produto } from "./produto.js";

export class  Livro extends Produto {
    #titulo;
    #numPag;

    constructor(tipo, titulo, numPag){
        super(tipo);
        this.#titulo = titulo;
        this.#numPag = numPag;
    }

    getDados(){

        return(`Tipo: ${super.getDados()}
        Tilulo: ${this.#titulo})
        Num. Página: ${this.#numPag}`)
    }
}