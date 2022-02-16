import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const commitment = ['acordar', 'tomar cafe', 'estudar', 'descansar', 'dormir'];
  return (
    commitment.map((element) => 
    Task(element)
    )
  );
}

export default App;
