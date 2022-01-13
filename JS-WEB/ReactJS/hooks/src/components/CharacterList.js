import AuthContext from '../contexts/AuthContext';
import { useState, useContext } from 'react';
import useFetch from '../hooks/useFetch'
import Character from './Character';

const CharacterList = () => {
    const { count } = useContext(AuthContext);
    const [url, setUrl] = useState('https://swapi.dev/api/people');
    const { state: characters, isLoading, error } = useFetch(url);

    return (
        <>
            <h3>Count - {count}</h3>
            <ul>
                {characters.map(x => <Character key={x.name} name={x.name} />)}
            </ul>
            <button onClick={() => setUrl('https://swapi.dev/api/planets')}>Load planets</button>
        </>
    );

};

export default CharacterList;