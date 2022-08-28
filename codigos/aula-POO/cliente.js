import { CupomDesconto } from "./cupomDesconto.js";

export class Cliente {
  #nome;
  #gastosAcumulados = 0;
  #cupom;

  constructor(nome) {
    this.#nome = nome;
    this.#cupom = new CupomDesconto();
  }
  getBeneficios(){
      this.#cupom.getDesconto(this.#gastosAcumulados);//tem acesso já que o cupom é um objeto da classe CupomDesconto
  }
  setGasto(valor){
    this.#gastosAcumulados += valor;
  }
}

