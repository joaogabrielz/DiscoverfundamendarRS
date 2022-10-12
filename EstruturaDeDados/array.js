//Array

let pilotos = ['senna', 'prost', 'schumacher', 'hamilton'];

//tam
console.log(pilotos.length);

//add
pilotos.push('alonso')
console.log(pilotos)

//find
const senna = pilotos.find(piloto => piloto === 'senna');
console.log(senna);

//delete
pilotos.splice(1,1);
console.log(pilotos);