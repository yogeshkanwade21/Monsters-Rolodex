import {React, useState, useEffect} from 'react';
import Cardlist from './card list/card-list';

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
        <div className='search-container'>
            <input
                type='search'
                className='searchBox'
                placeholder="Search Monsters"
                value={searchString}
                onChange={handleSearchChange}
            />
        </div>
        <Cardlist monsterList={filteredMonsters}/>
        {/* {filteredMonsters.map((monster) => {
            return (
                <div key={monster.id}>
                    <h2>{monster.name}</h2>
                </div>
            );
        })} */}
    </>
  )
}

export default Body;