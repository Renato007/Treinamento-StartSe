import { Financiamento } from "./financiamento.js";
import { Parcela } from "./parcela.js";

const conCarencia = document.querySelector("#conCarencia");
const listaSuspensa = document.querySelector("#listaSuspensa");
const corpoTabela = document.querySelector("#corpoTabela");
const botaoCalcular = document.querySelector("#butaoCalcular");

const textoValor = document.querySelector("#textoValor");
const textoEntrada = document.querySelector("#textoEntrada");
const textoTaxaJuros = document.querySelector("#textoTaxaJuros");
const textoPrazo = document.querySelector("#textoPrazo");

conCarencia.addEventListener("change", function () {
  if (this.checked) {
    listaSuspensa.removeAttribute("hidden");
  } else {
    listaSuspensa.setAttribute("hidden", "hidden");
  }
});

botaoCalcular.addEventListener("click", function () {
  const valor = parseFloat(textoValor.value);
  const entrada = parseFloat(textoEntrada.value);
  const taxaJuros = parseFloat(textoTaxaJuros.value);
  const prazo = parseFloat(textoPrazo.value);
  let simulacao;
  simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);
  simulacao.calParcelasMensais();
  simulacao.exibirParcelas();
  
});
