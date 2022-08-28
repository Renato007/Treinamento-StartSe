export class CupomDesconto {
  #desconto01 = 10;
  #desconto02 = 20;

  constructor() {}
  getDesconto(gastos) {
    if (gastos >= 1000 && gastos <= 3000) {
      console.log(`Você tem direito a ${this.#desconto01}% de desconto!`);
    } else if (gastos > 3000) {
      console.log(`Você tem direito a ${this.#desconto02}% de desconto!`);
    } else {
      console.log(`Infelismente, você não tem descontos no momento!`);
    }
  }
}
