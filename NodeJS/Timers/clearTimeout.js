// cleartimeout cancela um timeOut

const timeOut = 3000;

const finished = () => console.log('Done!');

//console.log(setTimeout(finished, timeOut)); // obj timeout

let timer = setTimeout(finished, timeOut);
clearTimeout(timer); // cancela timeout guardado, que rodaria dps de 3000ms
