// settimeout roda funca depois de x milisegundos

const timeOut = 3000;

const finished = () => console.log('Done!');


//args : funcao como referencia e o tempos
//finished -> cancelIdleCallback, vai ser chamada depois de 3000ms
//Asincrono:

setTimeout(finished, timeOut);
console.log('Mostrar') // imediato