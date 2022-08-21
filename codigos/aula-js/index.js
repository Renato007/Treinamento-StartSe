const listaTarefas = document.querySelector("#listaTarefas");
const caixaTexto = document.querySelector("#caixaDeTexto");
const botaoAdiconar = document.querySelector("#btAdicionar");
const listaSuspensa = document.querySelector("#listaSuspensa");

botaoAdiconar.addEventListener("click", function () {
  const textoDaTarefa = caixaTexto.value;
  caixaTexto.value = "";
  listaTarefas.appendChild(adiconaTarefa(textoDaTarefa));
  exibeOcultaListaSuspensa();
  caixaTexto.focus();
});

//botão ADICONAR TAREFA
function adiconaTarefa(textoDaTarefa) {
  const elementoLI = document.createElement("li");
  const elementoSPAN = document.createElement("span");

  elementoSPAN.setAttribute("class", "tarefa");
  elementoSPAN.textContent = textoDaTarefa;

  elementoLI.className = "naoRealizada";
  elementoLI.appendChild(elementoSPAN);
  elementoLI.appendChild(AdiconarBotaoRemover());

  //LISTER - SEMPRE QUE UM ITEM DA LISTA FOR CLICADO PELO MOUSE
  //ALTERA O MARCADOR, A COR DA FONTE E RISCA O TEXTO
  elementoSPAN.addEventListener("click", function () {
    if (this.className === "tarefa") {
      if (this.parentNode.className === "naoRealizada") {
        this.parentNode.className = "realizada";
      } else {
        this.parentNode.className = "naoRealizada";
      }
    }
  });

  return elementoLI;
}

//BOTÃO REMOVER
function AdiconarBotaoRemover() {
  const botaoRemover = document.createElement("button");

  botaoRemover.textContent = "✘";
  botaoRemover.className = "remover";

  //LISTENER -SEMPRE O BOTÃO REMOVER FOR CLICADO PELO MOUSE REMOVE O ITEM DA LISTA
  botaoRemover.addEventListener("click", function () {
    listaTarefas.removeChild(this.parentNode);
    exibeOcultaListaSuspensa();
  });

  return botaoRemover;
}

function exibeOcultaListaSuspensa() {
  const elementoSPAN = document.querySelector(".tarefa");
  console.log(elementoSPAN);
  if (elementoSPAN === null) {
    listaSuspensa.setAttribute("hidden", "hidden");
  } else {
    listaSuspensa.removeAttribute("hidden");
  }
}

listaSuspensa.addEventListener("change", function () {
  if (
    (listaSuspensa.selectedIndex === 1) |
    (listaSuspensa.selectedIndex === 2)
  ) {
    const vetorTarefas = listaTarefas.querySelectorAll(".tarefa");
    for (tarefa of vetorTarefas) {
      tarefa.dispatchEvent(new Event("click"));
    }
  } else if (
    (listaSuspensa.selectedIndex === 3)
  ) {
    const vetorBotoesRemover = listaTarefas.querySelectorAll(".remover");
    for (tarefa of vetorBotoesRemover) {
      tarefa.dispatchEvent(new Event("click"));
    }
  }
});
