//const events = require('events');
//console.log(events);

// > Funcao estilo class EvntEmitter
const { EventEmitter } = require('events');
//console.log(EventEmitter);

// > Instanciar novo evento
const ev = new EventEmitter();
//console.log(ev);


// > Ouvir emissao de eventos sempre, precisa esatr 'ligado' - on
// ev.on('SaySomething', (message) =>{
//     console.log("\n Eu ouvi voce ...", message);
// })


// > Ouvir uma unica vez
ev.once('SaySomething', (message) =>{
    console.log("\n Eu ouvi voce ...", message);
})



// > Emitir evento
ev.emit('SaySomething', 'joao');
// ev.emit('SaySomething');
ev.emit('SaySomething', 'camila');
ev.emit('SaySomething', 'vitor');

