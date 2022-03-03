import './App.css';
import data from './data';
import Pokemon from './Pokemon'

function App() {
  const list = data.map(
    (element) => <Pokemon pokemon={element} />
  )
  return (
    <main>
      <h1>
        Pokedex
      </h1>
      <div className='pokemons'>
        {list}
      </div>
    </main>
  );
}

export default App;
