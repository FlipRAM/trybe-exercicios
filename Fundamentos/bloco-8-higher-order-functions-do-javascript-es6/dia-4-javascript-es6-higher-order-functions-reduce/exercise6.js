const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(media, nextElement, index, array) {
  // escreva seu código aqui
  return media + nextElement;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const studentsMedia = students.map((person, index) => ({
  name: person,
  average: grades[index].reduce(studentAverage, 0) / grades[index].length
}))

console.log(studentsMedia);