import React from 'react';
import './card-list-styles.css';
import Card from '../card/card';

const Cardlist = ({monsterList}) => {
  return (
    <div className='card-list'>
      {monsterList.map((monster) => {
        return (
          <Card monster = {monster} key={monster.id}/>
        )
      })}
    </div>
  )
}

export default Cardlist;