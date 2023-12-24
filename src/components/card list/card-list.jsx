import React from 'react';

const Cardlist = ({monsterList}) => {
  return (
    <>
        {monsterList.map((monster) => {
            return (
            <div>{monster.name} {monster.id}</div>

            )
        })}
    </>
  )
}

export default Cardlist;