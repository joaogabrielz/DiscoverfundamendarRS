const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){

  const items = [
    { 
      title: "D", 
      message: "esenvolver aplicações/serviços facil" 
    },
    { 
      title: "E", 
      message: "JS usa Javascript para renderizar HTML" 
    },
    { 
      title: "M", 
      message: "uito fácil de usar" 
    },
    { 
      title: "A", 
      message: "migavel" 
    },
    { 
      title: "I", 
      message: "nstall ejs" 
    },
    { 
      title: "S", 
      message: "intaxe Simples" 
    }
  ];

  const subtitle = "Uma linguagem de Modelagem para criação de paginas HTML utilizando JS"

  res.render("pages/index" ,{
    qualitys: items,
    subtitle
  })

})

app.get("/sobre", function(req, res){
  res.render("pages/about")
})

app.listen(8080);
console.log("listen at 8080");