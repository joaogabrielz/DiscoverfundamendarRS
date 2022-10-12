//Herança

class Veiculo {
  rodas = 4;
  mover(direcao){
    console.log('movendo para ' + direcao);
  }
}

class Moto extends Veiculo{
  constructor(){
    super(); // puxar atribvutos e metodos do pai
    this.rodas = 2;
  }
} 

let motoca = new Moto();
console.log(motoca.rodas)
console.log(motoca.mover('esquerda'))
