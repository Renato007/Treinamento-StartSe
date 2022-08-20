//TIPO DE DADOS DE REFERENCIA

//FUNÇÃO - FUNCTION

function exibirMensagem(nome){
    alert(`Olá ${nome}! Mensagem teste.`);
}

function concatenar(primeiro, segundo){
    alert(`Olá ${primeiro} ${segundo}! Mensagem teste.`);
}

function soma(a, b){
    //let total = a + b;
    //return total;
    return a + b;
}

let resultado = soma(10 , 5 ); 

//chamada de função
exibirMensagem('Carla');
concatenar('Amanda', 'Silva');
console.log(resultado)
