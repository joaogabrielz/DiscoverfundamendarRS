// um encadeamento de funcoes
// uma funcao que retorna um dado e vai pqara outra funcao
//que retorna um dado e vai para outra funcao que retorna

const people = [ 'rafa', 'diego', 'dani', 'rod']

const upperCasePeopleThatStartsWithD = people
.filter(person => person.startsWith('d'))
.map(dperson => dperson.toUpperCase());

console.log(upperCasePeopleThatStartsWithD);