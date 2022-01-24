// Exercicio 1:
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }

  return employees;
};

const createEmployee = (nome) => {
  let concatName = ((nome.toLowerCase()).split(' ')).join('_');
  const newPerson = {
    nome: nome,
    email: `${concatName}@trybe.com`
  }
  return newPerson;
};

console.log(newEmployees(createEmployee));

// Exercicio 2:
const sorteio = (numberToCheck, sorteio) => {
  sorteio(numberToCheck);
};

const luckyNumber = (numberToCheck) => {
  const number = Math.round(Math.random()*5);
  if (numberToCheck === number) {
    console.log('Parabens, voce ganhou');
  } else {
  console.log('Tente Novamente');
  }
}

sorteio(3, luckyNumber)

// Exercicio 3:
const checkAnswers = (arrayGabarito, arrayAVerificar, contCorrects) => {
  const contagemPontos = contCorrects(arrayGabarito, arrayAVerificar);
  console.log(`O estudante obteve: ${contagemPontos} pontos`);
}

const contProva = (arrayCerto, arrayAChecar) => {
  let count = 0;
  for (let i = 0; i < arrayCerto.length; i += 1) {
    if (arrayAChecar[i] === arrayCerto[i]) {
      count += 1;
    } else if (arrayAChecar[i] === 'N.A') {
      count = count;
    } else {
      count -= 0.5;
    }
  }
  return count;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, contProva);