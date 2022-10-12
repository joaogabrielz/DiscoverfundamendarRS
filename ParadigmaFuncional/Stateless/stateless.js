
// STATEFULL function, fica variando
let number = 2;

function square() {
  return number * number;
}
number = square();


// STATELESS function, nao guarda estado, consistente
const square = n => n * n;