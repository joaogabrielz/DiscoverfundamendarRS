//Porque event events são a base pra outros modulos

const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character(name) {
    this.name = name;
}

//funcao emiter esta sendo a base pra ter Character
//Herdamos para nosso Character, todas opcoes do event emitter
inherits(Character, EventEmitter);

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu o ${chapolin.name} coloarado! `))

console.log('Oh! E agora, quem poderá me defender? ');
chapolin.emit('help');