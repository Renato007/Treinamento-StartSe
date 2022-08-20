const email = "nome@nomeDodominio.com";

let emailArray = email.split("@");
console.log(emailArray);

//criar uma lista de itens
const grupo = "Basquete, Futebol, Volei, Tenês";

console.log(grupo);
console.log(typeof grupo);
const modalidades = grupo.replaceAll(" ", "").split(",");
console.log(modalidades);
console.log(typeof modalidades);

const cidades = [];
console.log(cidades);
//PUSH - ADICONAR NO FINAL
cidades.push("Rio", "São Paulo");
console.log(cidades);

//UNSHIFT -ADICIONAR NO COMEÇO
cidades.unshift("Fortaleza");
console.log(cidades);

//POP -REMOVER O ULTIMO ELEMENTO -RETORNA ELEMENTO REMOVIDO
let removida = cidades.pop();
console.log("Cidade removida " + removida);
console.log(cidades);

//SHIFT- REMOVE O PRIMEIRO ELEMENTO -RETORNA ELEMENTO REMOVIDO
let removida02 = cidades.shift();
console.log("Cidade removida " + removida02);
console.log(cidades);

//SPLICE -REMOVE 1 OU MAIS INTES - UTILIZANDO UM ÍNDICE
cidades.push("Campinas", "Minas Gerais", "Espirito Santos");
console.log(cidades);
console.log(cidades.splice(1, 2));
console.log(cidades);

//ARRAY - FROM

const x = Array.from("ABNT");
console.log(x);

//Se o elemento existe - INCLUDES

console.log(cidades.includes("São Paulo"));
console.log(cidades.includes("Rio"));

//ITERAR OU PERCORRER

const jogadores = [
  {
    nome: "Beto",
    posicao: "Atacante",
  },
  {
    nome: "Dil",
    posicao: "Zagueiro",
  },
  {
    nome: "Milton",
    posicao: "Atacante",
  },
  {
    nome: "Bruno",
    posicao: "Volante",
  },
  {
    nome: "Paulo",
    posicao: "Goleiro",
  },
];


//CONSTRUIR UMA NOVA LISTA SO COM A PROPRIEDADE NOME DOS OBJETOS
function ObterNomeJogador(j){
    return j.nome;
}
function ObterAposicaoDojogador(j){
    return j.posicao;
}

let nomesJogadores = jogadores.map(ObterNomeJogador);
console.log(nomesJogadores)

let listaPosicao = jogadores.map(ObterAposicaoDojogador);
console.log(listaPosicao)

// retorna o objeto atraves de um filtro 
function obterVolante(jogador){
    return jogador.posicao ==='Volante';
}
const listaVolantes = jogadores.filter(obterVolante);
console.log(listaVolantes)

//foreach - para cada
function exibirCadaJogador(jogadores){
console.log(jogadores.nome)
}


jogadores.forEach(exibirCadaJogador)
