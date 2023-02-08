'use restrict';
//seleccion por id
const art1 = document.getElementById('art1');
//seleccion por id queryselectr
const art2 =document.querySelector('#art2');
//seleccion por el atributo name
const contenedor = document.getElementsByName("contenedorImg");
//seleccion por el atributo class
const subtitle = document.getElementsByClassName('subtitle');
//seleccion queryselector class
const stitle = document.querySelector('.subtitle');
//seleccionar todos los elementos
const li = document.querySelectorAll("li");
console.log(art2);

const button = document.querySelector('#enviar');

button.addEventListener('click', ()=>{
    const name = document.getElementById('name').ariaValueMax;
    alert (`Hola ${name}`);
});