// funcoes que recebem funcoes como argumentos
// funcoes que poderao retornar outras funcoes..

// exemplo map() do JS
const numbers = [2,4,8,16];

const square = n => n*n;

const squaredNumber = numbers.map(square)// passando funcao como argumento retorna td ao quadrado
console.log(squaredNumber);



// exemplo de retorno de funcao
//( CURYNG ou aplicação parcial de funcao) 

const pause = wait => fn => setTimeout(fn, wait);

pause(600)(() => console.log('waiting 600ms'))

const wait20 = pause(200)
const wait1000 = pause(1000)

wait20(() => console.log('waiting 200ms'))
wait1000(() => console.log('waiting 1s'))