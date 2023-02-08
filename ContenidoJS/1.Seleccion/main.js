"use strict";

const value = () =>{
    let myValue = parseFloat(prompt("introduzca su valor"));
    return myValue;
};

const testValue = (value) => {

   /* switch(value){
        case 1: console.log("Introdujo 1");
        break;
        case 2: console.log("Introdujo 2");
        break;
        default: console.log("otro valor");
    }*/
    switch(true){
        case value=0 && value <3 : alert
        ("Aplazado"); break;
        case value=3 && value <=5 : alert
        ("Aprobado"); break;
        default: console.log("Error en valor");
    }

};

let resp = value();
testValue(resp);