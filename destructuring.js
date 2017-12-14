// Desestruturação

const user = {
  nome: 'Diego Fernandes',
  empresa: 'RocketSeat',
  endereco: {
    rua: 'Al. Bela Aliança',
    num: '775',
    cidade: 'Rio do Sul',
  }
};

const nome = user.nome;
const empresa = user.empresa;
const rua = user.endereco.rua;
const num = user.endereco.num;

// ES6

const { nome, empresa, endereco: { rua, num, cidade } } = user;

console.log(nome);
console.log(empresa);
console.log(rua);
console.log(num);
console.log(cidade);
