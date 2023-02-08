"use strict";
//contenedores var -> global let ->local const- constantes 
/**
 * Funciones: Clásica, flecha
 */

let numr1 = 9;
const IVA_P = 3.19;
//Funcion clásica
//funciones en js debn tener un retorno
function addition(num1, num2){
    return num1 + num2;
}

//Invocacion de la función

/*let response = addition(numr1,8);
console.log(response);
console.log(addition(12,8));*/

//Función tipo flecha 
const avg = (n1, n2, n3) =>{
    return (n1+n2+n3)/3;
}
console.log(avg(numr1,IVA_P,78));