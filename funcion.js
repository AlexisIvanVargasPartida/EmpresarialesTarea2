var letras=require('./letras');

const str='Instituto Tecnologico';

var a=letras.palindrome(str);
var b=letras.cantidadPalabras(str);
var c=letras.cantidadLetras(str);
var d=letras.cantidadVocales(str);
var e=letras.cantidadConsonantes(str);

console.log("Es Palindromo?:"+a);
console.log("Cantidad de Palabras:"+b);
console.log("Cantidad de Letras:"+c);
console.log("Cantidad de Vocales:"+d);
console.log("Cantidad de Consonantes:"+e);
