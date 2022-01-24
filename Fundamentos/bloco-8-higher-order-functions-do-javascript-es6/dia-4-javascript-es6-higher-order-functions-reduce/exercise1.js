const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(previousElement, nextElement) {
  // escreva seu código aqui
  let newList = previousElement;
  for(let i = 0; i < nextElement.length; i += 1) {
    newList.push(nextElement[i])
  }
  return newList;
}

console.log(arrays.reduce(flatten));