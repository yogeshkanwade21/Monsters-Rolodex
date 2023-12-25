import {React, useState, useEffect} from 'react';
import Cardlist from '../card list/card-list';
import SearchBar from '../search box/search-bar';

const Body = () => {
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState([]);
    const [searchString, setSearchString] = useState('');

    const handleSearchChange= (e) => {
        const searchFieldString = e.target.value.toLocaleLowerCase();
        setSearchString(searchFieldString);        
    }

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString);
        });
        setFilteredMonsters(newFilteredMonsters);
      }, [monsters, searchString]);

    useEffect(() => {
        // API call
        const getMonsters = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setMonsters(data);
                setFilteredMonsters(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        
        getMonsters();
    }, []);

  return (
    <>
        <SearchBar
            className='monsters-search-box'
            placeholder='Search Monsters...'
            onChangeHandler={handleSearchChange}
        />
        <Cardlist monsterList={filteredMonsters}/>
    </>
  )
}

export default Body;