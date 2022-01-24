function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

module.exports = sum;

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

test('function myremove returns [1, 2, 4], when the parameter ([1, 2, 3, 4], 3) is given', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
});

test('function myremove dont returns [1, 2, 3, 4], when the parameter ([1, 2, 3, 4], 3) is given', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
});

test('function myremove returns [1, 2, 3, 4], when the parameter ([1, 2, 3, 4], 5) is given', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
});
