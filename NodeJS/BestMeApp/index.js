//console.log(usa por debaixo dos panos stdout com \n)
//process.stdout.write("Alguma coisa \n");

//Run: node index

const questions = [
  "Oque aprendi hoje?",
  "Oque me deixou aborrecido?",
  "Oque eu poderia fazer para melhorar?",
  "Oque me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?"
]

const ask = ( index = 0) => {
  process.stdout.write("\n\n" + questions[index] + " > ");
}
ask();



//ouvindo eventos (Event Loop), 'data' sempre q for inserido (dados)
//no processo eu executo uma funcao
//Rodando assincronamente, sempre q tiver dados ele roda a 

const answers = [];

process.stdin.on("data", data => {

 // process.stdout.write("\n" + data.toString(). trim() + '\n');
  answers.push(data.toString().trim());

  if(answers.length < questions.length){
    ask(answers.length);
  }
  else{
    console.log("\n\nRespostas: " + answers + "\n");
    process.exit();
  }
});

//Ouvir evento de exit, executa funcao callback
process.on('exit', () => {
  console.log(`
  Legal!

  ${questions[0]}:
   > ${answers[0]}

  ${questions[1]}:
   > ${answers[1]}

  ${questions[2]}:
   > ${answers[2]}

  ${questions[3]}:
   > ${answers[3]}

  ${questions[4]}:
   > ${answers[4]}

  Volte amanha para novas reflexões ...
  `)
})