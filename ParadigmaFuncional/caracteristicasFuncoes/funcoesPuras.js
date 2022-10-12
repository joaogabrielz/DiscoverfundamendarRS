// nao devera depender de nenhum dado externo, ah nao ser passado por argumento
// nao devera sofrer nenhuma interferencia do mundo externo
// se o argumento é o mesmo, o retorno nao podera ser diferente a funcao for chamada novamente
// nao terá nenhum efeito colateral no seu codigo
    // nao ira modificar dado, // nao ira guardar estado


// Funcao impura

//ex1: depebndendo de dado externo q nao foi passado como param
function calculaCirc(radius){
  return Math.PI * (radius + radius);
}

//ex2: esta alterando dado externo
let person = {
  name: 'Rafael',
  age: 'jovem'
}
function changeName(name){
  person.name = name;
}



//Funcao PURA

//ex1 
function calculaCirc(pi, radius){
  return pi * (radius + radius);
}

//ex2
const changePersonName = (person, name) => ({...person, name})