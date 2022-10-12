//require() // Chama modulos nativos ou que podemos criar do Node

//Modulos nativos
const path = require('path');

console.log(path.basename(__filename)); // return name of file '3require.js'

console.log(path.basename("/Users/starter/docs.js")); // return name of file 'docs.js'


//Meu Modulo 

const myModule = require('./4exports');
console.log(myModule);