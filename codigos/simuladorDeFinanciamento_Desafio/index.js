const conCarencia = document.querySelector('#conCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');

conCarencia.addEventListener('change', function(){
if(this.checked){
    listaSuspensa.removeAttribute('hidden');
}else{
    listaSuspensa.setAttribute('hidden','hidden');

}
});