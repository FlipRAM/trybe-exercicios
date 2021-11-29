let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1:

for (let count = 0; count < numbers.length; count += 1) {
    console.log(numbers[count]);
}

// Exercício 2:

let soma = 0;

for (let count = 0; count < numbers.length; count += 1) {
    soma += numbers[count];
}

console.log('A soma de todos os números é: ' + soma);

// Exercício 3:

let mediaAritmetica = soma / numbers.length;

console.log('A média aritmética é: ' + mediaAritmetica);

// Exercício 4:

if (mediaAritmetica > 20) {
    console.log('Valor da média aritmética é maior que 20')
}

else if (mediaAritmetica < 20) {
    console.log('Valor da média aritmética é menor que 20');
}

else {
    console.log('Valor da média aritmética é igual a 20')
}

// Exercício 5:

let maiorValor = 0;

for (let count = 0; count < numbers.length; count += 1) {
    if (numbers[count] > maiorValor) {
        maiorValor = numbers[count];
    }
}

console.log('O maior valor é: ' + maiorValor);

// Exercício 6:

let qtdImpar = 0;

for (let count = 0; count < numbers.length; count += 1) {
    if (numbers[count] % 2 !== 0) {
        qtdImpar += 1;
    }
}

if (qtdImpar > 0) {
    console.log('A quantidade de número ímpares é: ' + qtdImpar);
}

else if (qtdImpar === 0) {
    console.log('Nenhum valor ímpar encontrado');
}

// Exercício 7:

let menorValor = maiorValor;

for (let count = 0; count < numbers.length; count += 1) {
    if (numbers[count] < menorValor) {
        menorValor = numbers[count];
    }
}

console.log('O menor valor é: ' + menorValor);

// Exercício 8:

newArray = [];

for (let count = 0; count < 25; count += 1) {
    newArray.push(count + 1);
}

console.log(newArray);

// Exercício 9:

for (let count = 0; count < newArray.length; count += 1) {
    let divisao = newArray[count] / 2;
    console.log(divisao);
}

// Exercício Bônus:
// Deve ser testado um por vez, pois altera diretamente no array numbers

// // Ordena crescentemente

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);

// // Ordena decrescentemente

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
// }

// console.log(numbers);

// // Novo array, um multiplicado pelo outro

// let multList = [];
// let mult = 0;

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = index - 1; secondIndex < index; secondIndex += 1) {
//         mult = (numbers[index] * numbers[secondIndex]);
//         multList.push(mult);
//     }
//     if (index === numbers.length - 1) {
//         mult = numbers[index] * 2;
//         multList.push(mult);
//     }
// }

// console.log(multList);
