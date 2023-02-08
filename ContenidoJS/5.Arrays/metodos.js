'use restrict';
//split
let cad = "enero_febrero_marzo_abril_mayo_junio";
const myArray2 = [100,200,2,3,4,5,6,7,8,9,10,11,12,13,14];
//console.log(typeof(cad));
let myArray1 =  cad.split("_");
//console.log(myArray1);
//Filter
const arrayResult = myArray2.filter((e)=>e%2===0);
//console.log(arrayResult);

//método push (inserta un elemento al final del arreglo)
myArray2.push(450);
console.log(myArray2);