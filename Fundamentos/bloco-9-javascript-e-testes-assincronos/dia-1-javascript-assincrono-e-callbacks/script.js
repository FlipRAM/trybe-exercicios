// Exercicios 1 e 2:

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// Exercicio 3:

// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   setTimeout(() => console.log("Returned planet: ", mars), 4000);
// };

// getPlanet(); // imprime Marte depois de 4 segundos

// Exercicio 4:

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = (callback) => {
//   console.log(`Mars temperatur is: ${callback()} degree Celsius`);
// }

// sendMarsTemperature(getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// Exercicio 5:

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...

// const sendMarsTemperature = (callback) => {
//   if (callback === temperatureInFahrenheit) {
//     callback(getMarsTemperature());
//   } else {
//     callback(getMarsTemperature());
//   }
// }

// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// Exercicio 6:

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// }

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// // definição da função sendMarsTemperature...

// const sendMarsTemperature = (callback, chanceError) => {
//   const errorPercentage = 40;
//   chance = Math.floor(Math.random() * 100);
//   if (chance < errorPercentage) {
//     return chanceError('Robot is busy');
//   } if (callback === temperatureInFahrenheit) {
//     return callback(getMarsTemperature());
//   } if (callback === greet) {
//     return callback(getMarsTemperature());
//   }

// }

// // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);

// Exercicio 7:

// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };

// module.exports = uppercase;

// Exercicios 8 e 9:

// const pokemons = [
//   {
//     name: 'Bulbasaur',
//     type: 'Grass',
//     ability: 'Razor Leaf',
//   },
//   {
//     name: 'Charmander',
//     type: 'Fire',
//     ability: 'Ember',
//   },
//   {
//     name: 'Squirtle',
//     type: 'Water',
//     ability: 'Water Gun',
//   },
// ];

// function getPokemonDetails(filter, callback) {
//   setTimeout(() => {
//     if (pokemons.find(filter) === undefined) {
//       return callback(new Error('Não temos esse pokémon para você :('), null);
//     }
//     const pokemon = pokemons.find(filter);

//     const { name, type, ability } = pokemon;

//     const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

//     callback(null, messageFromProfOak);
//   }, 2000);
// }

// getPokemonDetails(
//   (pokemon) => pokemon.name === 'Charmander',
//   (error, message) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(message);
//     }
//   }
// );

// module.exports = {
//   getPokemonDetails,
// };
