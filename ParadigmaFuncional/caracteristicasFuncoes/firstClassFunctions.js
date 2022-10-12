// podem estar em qualquer lugar inclusive como parametro de outra funcao
// a funcao podera ser entendida como uma variavel

//pega funcao e roda..

const sayName = () => console.log('Joao');
const runFunction = fn => fn();

runFunction(sayName);
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))