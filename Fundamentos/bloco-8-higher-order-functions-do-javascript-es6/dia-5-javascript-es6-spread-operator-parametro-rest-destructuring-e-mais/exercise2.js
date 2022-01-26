// escreva sum abaixo

const sum = (...args) => args.reduce((acumulador, current) => acumulador + current, 0);

console.log(sum(1,2,3,4,5,6,7))