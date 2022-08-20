//string

let nome ="Ana";
let idade = 20;

let concatenar = nome +', ' + idade + ' anos.';
console.log(concatenar);

let localizacao = 'Curitiba-PR'

concatenar =`Este é O lugar ${localizacao}`;
console.log(concatenar)
console.log(nome.length);
console.log(nome.toLocaleLowerCase());
console.log(nome.toLocaleUpperCase());

let estado = localizacao.substring(9); // remove os primeiros caracteres.
console.log(estado)
console.log(estado.substring(estado.length-2))

const frase = "Vamos pra cima!: javascript"
const indice = frase.indexOf(':');

const curso = frase.substring(indice+2);
console.log(curso)

let texto = 'basquete';
console.log(texto)
texto = texto.replace('bas', 'ra')
console.log(texto)


let frase01 ='A festa ocorrerá no primeiro dia do primeiro mês';

let novaFrase =frase01.replaceAll('primeiro', 'segundo')
console.log(novaFrase)


