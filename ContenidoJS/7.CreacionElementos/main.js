'use restrict';
const parrafo2 = document.getElementById("parrafo2");

const mySubtitle = document.createElement("h2");
// asignar contenido
mySubtitle.textContent = "esto es un subtitulo creado desde Javascript";
// agregar atributos al elemento
mySubtitle.id = "sub1";
mySubtitle.className = "subtitulo";
mySubtitle.style = "color:red; font-weight:bold";
mySubtitle.setAttribute = ("name","sub1");


// Insertar en el DOM
// document.body.appendChild(mySubtitle);


parrafo2.appendChild(mySubtitle);

const parrafo3 = document.createElement("p");
parrafo3.textContent = "<h3>sub</h3>"; //solo contenido
parrafo3.innerHTML = "<h3>sub</h3>"; //renderiza etiquetas
parrafo2.appendChild(parrafo3);