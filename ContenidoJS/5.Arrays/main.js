'use strict';

const myArray1 = [100,200,2,3,4,5,6,7,8,9,10,11,12,13,14];
let myArray2 = new Array ('a','w','z');

for (let i = 0; i< 15; i++){
   // console.log(myArray1[i]);
}

for(let j in myArray1){
    //console.log(myArray1[j])
}
for (let k of myArray2){
    console.log(k);
}