const { expect } = require('@jest/globals');
const uppercase = require('./script');

// test('the function uppercase transform every letter to uppercase', (done) => {
//   uppercase('felipe', (result) => {
//     try {
//       expect(result).toBe('FELIPE');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

// Verifique se a importação do arquivo correto está sendo feita.
// const { getPokemonDetails } = require("./script");

// describe("A função getPokemonDetails", () => {
//   it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
//     const expectedError = new Error ('Não temos esse pokémon para você :(');

//     function callback(error, result) {
//       expect(error).toEqual(expectedError);
//       done();
//     }

//     getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
//   });

//   it("retorna um pokemon que existe no banco de dados", (done) => {
//     const expected = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

//     function callback(error, result) {
//       expect(result).toEqual(expected);
//       done();
//     }

//     getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
//   });
// });

// Exercicio 10:

// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });