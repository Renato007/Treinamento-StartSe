//tipo de DADOS DE REFERÊNCIA
//OBJETO -object

let titulo = "Introdução ao Javascript";
let numPag = "500";

const livro = {
  titulo: "Introdução ao Javascript",
  numPag: 500,
};

console.log(livro.titulo);

//alterando o valor  da propriedade titulo.
livro.titulo = "Javascript -Avançado";
console.log(livro["titulo"]);

//criar uma nova propriedade
livro.editora = "BrasilLivros";
console.log(livro);

//podemos ter propriedades objetos
const pessoa = {
  primeiroNome: "Carlos",
  ultimonome: "Silva",
  endereco: {
    rua: "nomeDaRua",
    num: 10,
  },
  //criar um metodo para um objeto
  nomeCompleto: function () {
    return this.primeiroNome + " " + this.ultimonome;
  },
};
pessoa.celular = "216666666";

pessoa.enderecoCompleto = function () {
  return `${this.endereco.rua} ${this.endereco.num}`;
};

console.log(pessoa.endereco.num);
console.log(pessoa.nomeCompleto());
console.log(pessoa.enderecoCompleto());

//usar um objeto no parametro de função

function exibirDadosPessoa(p) {
  alert(
    `\nNome da Pessoa :${p.nomeCompleto()}\n
        Endereço: ${p.endereco.rua} ${p.endereco.num}\n
        Contato do(a) ${p.nomeCompleto()} : ${p.celular}
        `
  );
}

exibirDadosPessoa(pessoa)
