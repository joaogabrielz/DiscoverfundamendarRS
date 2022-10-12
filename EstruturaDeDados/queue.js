// Fila , 'fila restaurante' - Linear
// Primeiro a entrar é o primeiro a sair
// FIFO - First in First Out
// entrando > enqueue , retirando > dequeue


// Passo 1 Modelando
class Queue {
  constructor(){
    this.data = [];
  }
  enqueue(item){
    this.data.push(item);
    console.log(`${item} chegou na fila!`)
  }
  dequeue(){
    const item = this.data.shift();
    console.log(`${item} saiu da fila!`)
  }
}

// 2 Utilizando:
const fila = new Queue();

fila.enqueue('Joao')
fila.enqueue('Pedro')
fila.enqueue('Maria')
fila.dequeue();
fila.dequeue();
fila.dequeue();
console.log(fila.data);