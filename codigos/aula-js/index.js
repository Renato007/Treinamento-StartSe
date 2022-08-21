const listaTarefas =document.querySelector("#listaTarefas");

const caixaTexto = document.querySelector('#caixaDeTexto')

const botaoAdiconar = document.querySelector("#btAdicionar")

botaoAdiconar.addEventListener("click", function(){
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value ='';

    listaTarefas.appendChild(adiconaTarefa(textoDaTarefa));
    caixaTexto.focus();
});

function adiconaTarefa(textoDaTarefa){
    const elementoLI = document.createElement('li');
    const elementoSPAN = document.createElement('span');

    elementoSPAN.setAttribute('class', 'tarefa');
    elementoSPAN.textContent = textoDaTarefa;

    elementoLI.appendChild(elementoSPAN);
    elementoLI.appendChild(AdiconarBotaoRemover())

    return elementoLI;
}

function AdiconarBotaoRemover(){
    const botaoRemover =document.createElement('button');

    botaoRemover.textContent = "✘";
    botaoRemover.className ='remover';
    console.log(listaTarefas)

    botaoRemover.addEventListener('click', function(){
        listaTarefas.removeChild(this.parentNode);//pegar o nó pai do botão .
    })

    return botaoRemover;
}