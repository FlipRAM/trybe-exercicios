let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}

// Exercicio 1

console.log('Bem-vinda, ' + info.personagem)

// Exercicio 2

console.log(info)

// Exercicio 3
for (let key in info) {
  console.log(key)
}

// Exercicio 4

for (let key in info) {
  console.log(info[key])
}

// Exercicio 5

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Comic #178",
  nota: 'O ultimo MacPatinhas',
  recorrente: 'Sim'
}

for (let key in (info, info2)) {
  if (info[key] === info2[key]) {
    console.log('Ambos ' + [key])
  } else {
    console.log(info[key] + ' e ' + info2[key])
  }
}

// Exercicio 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: ['O Pior Dia de Todos'],
      autor: ['Daniela Kopsch'],
      editora: ['Tordesilhas']
    }
  ]
}

let titulo1 = leitor.livrosFavoritos[0]
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + titulo1.titulo)

// Exercicio 7

let autor1 = leitor.livrosFavoritos[1]
let editora1 = leitor.livrosFavoritos[2]
titulo1.push('Harry Potter e o Prisioneiro de Azkaban')
autor1.push('JK Rowling')
editora1.push('Rocco')
console.log(leitor.nome + ' tem ' + titulo1.titulo.length + ' livros favoritos')

function checkPalindromo (word) {
  let wordReversed = word.split('').reverse().join('')
  if (wordReversed === word) {
    return true
  } else {
    return false
  }
}

let testWord = 'arara'
console.log(checkPalindromo(testWord))

let testWord2 = 'desenvolvimento'
console.log(checkPalindromo(testWord2))

function maiorValorIndice (numberList) {
  let maior = numberList[0]
  let indiceMaior = 0
  for (let percorrer = 0; percorrer < numberList.length; percorrer += 1) {
    if (numberList[percorrer] > maior) {
      maior = numberList[percorrer]
      indiceMaior = percorrer
    }
  }
  return indiceMaior
}

function menorValorIndice (numberList2) {
  let menor = numberList2[0]
  let indiceMenor = 0
  for (let percorrer = 0; percorrer < numberList2.length; percorrer += 1) {
    if (numberList2[percorrer] < menor) {
      menor = numberList2[percorrer]
      indiceMenor = percorrer
    }
  }
  return indiceMenor
}

listaNum = [2, 3, 6, 7, 10, 1]
console.log(maiorValorIndice(listaNum))

listaNum2 = [2, 4, 6, 7, 10, 0, -3]
console.log(menorValorIndice(listaNum2))

function maisCaracteres(listaNomes) {
  let maior = 0
  let index = 0
  for (let percorrer = 0; percorrer < listaNomes.length; percorrer += 1) {
    let cont = 0
    for (let i = 0; i < listaNomes[percorrer].length; i += 1) {
      cont += 1
    }
    if (cont > maior) {
      maior = cont
      index = percorrer
    }
  }
  return listaNomes[index]
}

// let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
// console.log(maisCaracteres(nomes))

// function maisSeRepete (listaNumeros) {
//   let maisRepete = 0
//   for (let percorrer = 0; percorrer < listaNumeros.length; percorrer += 1) {
//     if 
//   }
// }
