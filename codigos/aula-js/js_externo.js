document.querySelector("#titulo").textContent =
  "aula de javascript -Introdução";
document.querySelector("#sub_titulo").textContent = "Bora pra cima";

//Apresentar uma msg e esconde o form de login

/* function bemVindo() {
  const nome = document.querySelector("#idNomeUsuario").value;
  alert(`Olá ${nome}! Sejá bem-vindo!`);
  document.getElementById("formularioLogin").style.display = "none";
} */

//Permite mudar a cor de fundo da página 
function mudaCorFundo() {
  const menu = getSelection("#coresFundo");

  const cor = menu.options[menu.selectedIndex].value;

  document.body.style.background = cor;
  console.log(cor);
  console.log(menu);
}

