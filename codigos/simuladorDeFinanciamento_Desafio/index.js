const conCarencia = document.querySelector('#conCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');
const corpoTabela = document.querySelector('#corpoTabela');


conCarencia.addEventListener('change', function(){
if(this.checked){
    listaSuspensa.removeAttribute('hidden');
}else{
    listaSuspensa.setAttribute('hidden','hidden');

}
});