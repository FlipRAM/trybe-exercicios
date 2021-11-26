//Programa 1: Adição

const a = 11;
const b = 2;
soma = a + b;
console.log(soma);

//Programa 2: Subtração

subtracao = a - b;
console.log(subtracao);

//Programa 3: Multiplicação

multiplicacao = a * b;
console.log(multiplicacao);

//Programa 4: Divisão

divisao = a / b;
console.log(divisao);

//Programa 5: Módulo

modulo = a % b;
console.log(modulo);

//Programa 6: Maior de 2 números

const c = 6;
const d = 12;

if (c === d) {
    console.log("Os numeros sao iguais");
}
else if (c > d) {
    console.log(c);
}
else if (c < d) {
    console.log(d);
}

//Programa 7: Maior de 3 números

const e = 5;
const f = 10;
const g = 15;

if (e > f) {
    if (e > g) {
        console.log(e);
    }
}
else {
    if (f > g) {
        console.log(f);
    }
    if (g > f) {
        console.log(g);
    }
}

//Programa 8: Positivo ou negativo

const h = -1;

if (h === 0) {
    console.log("O numero e 0");
}
else if (h > 0) {
    console.log("positive");
}
else {
    console.log("negative");
}

//Programa 9: Checar se e triangulo

i = 30;
j = 60;
k = 90;
somaAngulos = i + j + k;

if (i < 0 || j < 0 || k < 0) {
    console.log("algum angulo menor que 0");
}
if (somaAngulos === 180) {
    console.log(true);
}
else if (somaAngulos < 180 || somaAngulos > 180) {
    console.log(false);
}

//Programa 10: Peças de xadrez

peca = "BiSpO";
pecaCorrigida = peca.toLowerCase();

switch (pecaCorrigida) {
    case "rei":
        console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;

    case "rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;

    case "bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
        break;

    case "cavalo":
        console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;
    
    case "torre":
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
        break;

    case "peao":
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.")

    default:
        console.log("ERROR: Peça inválida");
}

//Programa 11: Conceito de Nota

const l = 85;

if (l >=90) {
    console.log("A");
}
if (l >= 80 && l < 90) {
    console.log("B");    
}
if (l >= 70 && l < 80) {
    console.log("C");    
}
if (l >= 60 && l < 70) {
    console.log("D");    
}
if (l >= 50 && l < 60) {
    console.log("E"); 
}
if (l < 50) {
    console.log("F");    
}
if (l > 100 || l < 0) {
    console.log("Error: Nota inválida");    
}

//Programa 12: Checar se pelo menos um é par

const m = 5;
const n = 7;
const o = 10;

if (m % 2 === 0 || n % 2 === 0 || o % 2 === 0) {
    console.log(true);
}
else {
    console.log(false);
}

//Programa 13: Checar se pelo menos um é impar

const p = 2;
const q = 4;
const r = 7;

if (p % 2 !== 0 || q % 2 !== 0 || r % 2 !== 0) {
    console.log(true);
}
else {
    console.log(false);
}

//Programa 14: Calcular lucro

custo = 1000;
venda = 2000;
if (custo < 0 || venda < 0){
    console.log("Error: um dos valores foi menor que 0");
}
else {
    custoTotal = custo * 1.2;
    lucro = (1000 * venda) - (1000 * custoTotal);
    console.log(lucro);
}

//Programa 15: Calcular o liquido a se receber

const salario = 3000;
let inss = 0;
let ir = 0;
let salarioDeduzido = 0;
let salarioFinal = 0;

if (salario < 1556.94) {
    inss = 0.08;
    salarioDeduzido = salario - (salario * inss)
}

else if (salario > 1556.95 && salario < 2594.92) {
    inss = 0.09;
    salarioDeduzido = salario - (salario * inss)
}

else if (salario > 2594.93 && salario < 5189.82) {
    inss = 0.11;
    salarioDeduzido = salario - (salario * inss)
}

else if (salario > 5189.82) {
    inss = 570.88
    salarioDeduzido = salario - inss
}

if (salarioDeduzido < 1903.98) {
    salarioFinal = salarioDeduzido
}

else if (salarioDeduzido > 1903.99 && salarioDeduzido < 2826.65) {
    ir = (salarioDeduzido * 0.075) - 142.80;
    salarioFinal = salarioDeduzido - ir
}

else if (salarioDeduzido > 2826.66 && salarioDeduzido < 3751.05) {
    ir = (salarioDeduzido * 0.15) - 354.80;
    salarioFinal = salarioDeduzido - ir
}

else if (salarioDeduzido > 3751.06 && salarioDeduzido < 4664.68) {
    ir = (salarioDeduzido * 0.225) - 636.13;
    salarioFinal = salarioDeduzido - ir
}

else if (salarioDeduzido > 4664.68) {
    ir = (salarioDeduzido * 0.275) - 869.36;
    salarioFinal = salarioDeduzido - ir
}

console.log(salarioFinal);