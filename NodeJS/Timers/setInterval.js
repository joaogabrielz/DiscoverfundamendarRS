// SetInterval ira rodar uma funcao N vezes
// depois de X milisegundos

const timeOut = 1000;
const checking = () => console.log('cheking!');

setInterval(checking, timeOut); // roda indefinidamente