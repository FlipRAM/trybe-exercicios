// Etapa 1: Quadrado de asteristicos

let n = 5;
let listaQuadrado = '';

if (n > 1) {
    for (let cont = 0; cont < n; cont += 1) {
        listaQuadrado += '*';
    }
    for (let cont = 0; cont < n; cont += 1) {
        console.log(listaQuadrado);
    }
}

// Etapa 2: Triângulo retângulo

let m = 5;
let listaTriangulo = '';

for (let cont = 0; cont < n; cont += 1) {
    listaTriangulo += '*';
    console.log(listaTriangulo);
}

// Etapa 3: Triângulo Invertido

let p = 5;
let listaInvertida = '';

for (let cont = p - 1; cont >= 0; cont -= 1) {
    for (let percorrer = 0; percorrer < p; percorrer += 1) {
        if (percorrer >= cont) {
            listaInvertida += '*';
        }
        else {
            listaInvertida += ' ';
        }
    }
    console.log(listaInvertida);
    listaInvertida = '';
}

// Etapa 4: Piramide

let q = 5;
let listaPiramide = '';
let bordasIniciais = Math.floor(q/2);

for (let elementosCentrais = q - (2 * bordasIniciais); elementosCentrais <= q; elementosCentrais += 2) {
    for (let percorrer = 0; percorrer < q; percorrer +=1){
        let bordaEsq = (q - elementosCentrais) / 2;
        let bordaDir = bordaEsq + elementosCentrais;
        if (percorrer < bordaEsq || percorrer >= bordaDir) {
            listaPiramide += ' ';
        }
        else if (bordaEsq <= percorrer < bordaDir) {
            listaPiramide += '*';
        }
    }
    console.log(listaPiramide);
    listaPiramide = '';
}

// Etapa Bonus 1: Piramide com vazio no meio

let r = 7;
let meio = (r + 1) / 2;
let ladoEsq = meio;
let ladoDir = meio;

for (let line = 1; line <= meio; line += 1) {
    let listaPiramideVazia = '';
    for (let col = 1; col <= r; col += 1) {
        if (col == ladoEsq || col == ladoDir || line == meio) {
            listaPiramideVazia += '*';
        } else {
            listaPiramideVazia += ' ';
        }
    }
    ladoEsq -= 1;
    ladoDir += 1;
    console.log(listaPiramideVazia);
}

// Etapa Bonus 2: Checar se é primo

let number = 41;
let divisiveis = [];

for (cont = 0; cont <= number; cont += 1) {
    if (number % 2 === 0 || number % cont === 0) {
        divisiveis.push(cont)
    }
}

if (divisiveis.length === 2) {
    console.log('O numero é primo')
}

else {
    console.log('O numero não é primo');
}