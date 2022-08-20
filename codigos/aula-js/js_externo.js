document.querySelector("#titulo").textContent = "aula de javascript -Introdução";
document.querySelector("#sub_titulo").textContent ="Bora pra cima"


//Apresentar uma msg e esconde o form de login 
function bemVindo(){
    const nome = document.querySelector("#idNomeUsuario").value;
    alert(`Olá ${nome}! Sejá bem-vindo!`);
    document.getElementById('formularioLogin').style.display ='none';
}

