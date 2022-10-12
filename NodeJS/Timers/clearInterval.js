// ClearInterval cancela um setInterval registrado

const timeOut = 1000;
const checking = () => console.log('cheking!');

const interval = setInterval(checking, timeOut);


setTimeout(() => clearInterval(interval), 3000); // cancela intervalo dps de 3s
//contam juntos..(1 seg tempo de preparação)