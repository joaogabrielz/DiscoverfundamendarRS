// ao menos 1 argumento
// deve retornar algo
// nada que acontece dentro afeta fora
      // - dados imutaveis  // - nao guarda estado
// nao usa loops(for, while), se houver necessidade usamos recursao


const random = (number, Math) => Math.floor(Math.random() * number);


// or recursive
//find factorial number
const factorial = x => {

  if( x === 0){ 
    return 1 
  }

  return x * factorial(x-1);
}