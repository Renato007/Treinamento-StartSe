'use strict'
import { Musica } from "./musica.js"
import { Produto } from "./produto.js";
import { Laboratorio } from "./laboratorio.js";

const lab = new Laboratorio("Informática", 10)
console.log(lab);
console.log(lab.getCapacidade());
lab.setCapacidade(20);
console.log(lab.getCapacidade());

//Declarando Métodos de uma Classe
/* 


*/