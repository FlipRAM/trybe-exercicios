// Parte 1:
// Exercicio 1:

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)'
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !'
//     console.log(ifScope)
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)'
//     console.log(elseScope)
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

const testingScope = (escopo) => {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)'
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`)
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)'
    console.log(`${elseScope}`)
  }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O');
}

testingScope(true)

// Exercicio 2:

const oddsAndEvens = [13, 3, 4, 10, 7, 2]

// Seu código aqui.
const sort = lista => lista.sort((a, b) => a - b)

console.log(`Os números ${sort(oddsAndEvens)} se encontram ordenados de forma crescente!`) // será necessário alterar essa linha 😉

// Parte 2:
// Exercicio 1:

const factorial = fator => (
  fator === 0
    ? 1
    : fator => {
      var resp = fator
      while (fator > 2) {
        resp *= --fator
      }
      return resp
    })

console.log(factorial(5))

// Exercicio 2:

const longestWord = frase => {
  const a = frase.split(' ')
  let maior = a[0]
  for (let i = 0; i < a.length; i += 1) {
    if (a[i].length > maior.length) {
      maior = a[i]
    }
  }
  return maior
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))

// Exercicio 3:

const clickCount = cont => {
  const paragrafo = document.querySelector('p')
  if (paragrafo.innerText === '') {
    paragrafo.innerText = '1'
  } else {
    cont = parseInt(paragrafo.innerText) + 1
    paragrafo.innerText = cont
  }
}
const botao = document.querySelector('button')
botao.addEventListener('click', clickCount)

// Exercicio 4:

var skillsTrybe = ['Javascript', 'HTML', 'CSS', 'SoftSkills', 'DOM']

const acharX = (phrase, change) => {
  const b = phrase.split(' ')
  for (let i = 0; i < b.length; i += 1) {
    if (b[i] === 'x') {
      b[i] = change
    }
  }
  return b.join(' ')
}

const juntarSkills = (phrase, skills) => console.log(`${phrase} Minhas cinco principais habilidades são:
${(skills.sort())[0]};
${(skills.sort())[1]};
${(skills.sort())[2]};
${(skills.sort())[3]};
${(skills.sort())[4]}.`
)

console.log(acharX('Tryber x aqui!', 'Bebeto'))

juntarSkills(acharX('Tryber x aqui!', 'Bebeto'), skillsTrybe)
