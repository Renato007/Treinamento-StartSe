
//Pegando o elemento lista
const lista = document.querySelector('#lista');

//Atribuindo a uma variavel um elemento HTML
const elementoLi =document.createElement('li');

lista.className = "novoponteiro";
//lista.setAttribute('class','novoponteiro');

lista.style.color ='red'


//atribuir para dentro do elemento HTMl o conteudo
elementoLi.textContent ="Um novo item na lista";

//Apagar todos os itens
const filhosDaLista = lista.querySelectorAll('li')

for (filho of filhosDaLista){
   // lista.removeChild(filho);
}


//adiconar um item no elemento pai
lista.appendChild(elementoLi)


//trabalhando com o botão

const botao = document.querySelector('button');
botao.addEventListener(
    'click',  function(){
lista.remove();
    }
);


console.log(lista);