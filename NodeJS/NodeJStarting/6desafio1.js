const getFlagValue = require('./6desafioFlag');
console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`);

// node 6desafio.js --name "Joao gabs" --greeting "beleza?"