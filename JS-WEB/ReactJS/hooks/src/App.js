import { useState, useEffect } from 'react';

import AuthContext from './contexts/AuthContext';

import Counter from './components/Counter';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  const [name, setName] = useState('Pesho');
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    name: 'Pesho',
    age: 30,
    hobbies: ['first', 'second', 'third']
  });

  useEffect(() => {
    setTimeout(() => {
      setName(oldState => oldState + 'o');
    }, 1500);
  }, [count]);

  const addHobby = (hobby) => {
    setInfo(oldState => ({
      ...oldState,
      hobbies: [...oldState.hobbies, hobby]
    }));
  };

  return (
    <AuthContext.Provider value={{count, user: info, addHobby }}>
      <div className="App">
        <h2>{!name ? 'Loading...' : name}</h2>

        {count < 10
          ? <Counter />
          : null
        }

        <button onClick={() => setCount(x => x + 1)}>+</button>


          <h3>Hobbies</h3>
        <ul>
          {info.hobbies.map(x => <li key={x}>{x}</li>)}
        </ul>

        <CharacterList />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
