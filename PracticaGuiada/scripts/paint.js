'use restrict';

import {checkAvg } from './validate.js';
const cardE = document.getElementById('cardsEstudiantes');
const students = [];
const paintCard = (typ) =>{
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateStudent = document.querySelector('#templareEstudiante');

    if (typ=== 'Estudiante'){
       for(let i of students){
        const cloneTemp = templateStudent.cloneNode(true);
        cloneTemp.querySelector('.title-card').innerHTML= "datos del estudiante";
        cloneTemp.querySelector('.data-card').innerHTML = `nombre: ${i.nombre.toUpperCase} apellidos: ${i.apellido.toUpperCase()}`;
        cloneTemp.querySelector('.text-promedio').innerHTML = `promedio es: ${i.promedio}`;
        cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.promedio)}`;
        fragment.appendChild(cloneTemp)
       } 
    }else{
        //pintar a profesor
    }
    cardE.appendChild(fragment);
}
const addStudent = (name,lastName, avg)=>{
    // objeto literal de js
    let student = {
        nom : name,
        ape: lastName,
        prom : avg
    }
    students.push(student);
    alert('se agrego estudiante')
};
export{paintCard,addStudent}