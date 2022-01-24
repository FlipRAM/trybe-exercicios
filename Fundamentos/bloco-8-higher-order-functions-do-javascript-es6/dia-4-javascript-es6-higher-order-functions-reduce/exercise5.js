const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(cont, next) {
  // escreva seu código aqui
  for (let index = 0; index < next.length; index += 1) {
    if (next[index] === 'a' || next[index] === 'A') {
      cont += 1
    }
  }
  return cont;
}

console.log(names.reduce(containsA, 0));