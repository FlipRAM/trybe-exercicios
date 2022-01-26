// escreva greet abaixo
const greet = (user, message = 'Hi') => `${message} ${user}`

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'