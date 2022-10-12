 // Estrutural

// let altura = 50;
// let largura = 60;

// function calcularArea(){
//   return altura * largura;
// }
// let area = calcularArea();
// console.log(area)


// POO

class Poligono {
  
  constructor(altura, largura){
    this.altura = altura;
    this.largura = largura;
  }

  get area(){
    return this.#calcularArea();
  }

  #calcularArea() {// # metodo nao visivel fora
    return this.altura * this.largura;
  }
}

//criar obj
let poligono = new Poligono(50, 60);
console.log(poligono.area);
//console.log(poligono.#calcularArea()); // nao funciona