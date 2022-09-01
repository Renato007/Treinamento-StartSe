export class Parcela{
    #numero;
    #valor;
    #juros;
    #amortizacao;
    #saldo;

    constructor(numero, valor, juros, amortizacao, saldo){
        this.#numero =numero;
        this.#valor =valor;
        this.#juros =juros;
        this.#amortizacao =amortizacao;
        this.#saldo =saldo;
    }
    //não vai precisar acessar todos os valores com get

    getSaldo(){
        return this.#saldo;
    }
}