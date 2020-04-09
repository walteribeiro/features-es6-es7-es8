// Spread

const dados = {
  empresa: 'Projetus TI',
  endereco: {
    rua: 'Park Sul', num: 's/n',
  },
};

const user1 = { nome: 'Walter', empresa: dados.empresa, endereco: dados.endereco };
const user2 = { nome: 'Luiz', empresa: dados.empresa, endereco: dados.endereco };

// ES6
const newUser = { ...dados, usuario: 'Walter' };