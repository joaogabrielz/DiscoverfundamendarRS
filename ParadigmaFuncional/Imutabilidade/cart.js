//Imutabilidade

const cart = {
  qtd: 2,
  total: 200
}

//NO, bad
cart.qnd = 3;

// GOOD
const newCart = {...cart, qtd: 4}


//ex React
const [amount, setAmount] = useState(0)

//bad
amount = 2;

//GOOD
setAmount(2);