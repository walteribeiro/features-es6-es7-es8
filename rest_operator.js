// Rest

const arr = [
  { id: 1, user: 'Walter' },
  { id: 2, user: 'Marcos' },
  { id: 3, user: 'Luiz' },
  { id: 4, user: 'Thiago' },
  { id: 5, user: 'Mateus' },
];

const a = arr[0];
const b = arr[1];
const c = [arr[2], arr[3], arr[4]];

// ES6

const d = [a, b, ...c]

console.log(d);