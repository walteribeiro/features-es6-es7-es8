// Async/await

api.get('/users/walteribeiro').then(function(user) {
  api.get('/repos/' + user.id).then(function(repos) {
    repos.forEach(function(item, index) {
      console.log('Posição: ' + index + ': ' + item);
    });
  });
});


// ES6

const buscaRepos = async () => {
  try {
    const user = await api.get('/users/walteribeiro');
    const repos = await api.get('/repos/' + user.id);

    repos.map((item, index) => {
      console.log('Posição: ' + index + ': ' + item);
    })
  } catch (err) {
    console.log(err);
  }
}