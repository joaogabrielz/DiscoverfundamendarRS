// Estruturado
var valorHora = 50
var tempoEstimado = 20
var desconto = valorHora * tempoEstimado * (10 /100);
var custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado)


// P.O.O
const job = new Job(); // só exemplo, nao tempos a classe Job
job.valorHora = 50;
job.tempoEstimado = 20;
job.desconto = 10;
const custoEstimado = job.calcularEstimativa();
console.log(custoEstimado);