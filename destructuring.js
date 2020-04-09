// Desestruturação

const user = {
  nome: 'Walter Ribeiro',
  empresa: 'Projetus TI',
  endereco: {
    rua: 'Park Sul',
    num: 's/n',
    cidade: 'Matias Barbosa',
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
