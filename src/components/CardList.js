import React, { useEffect, useState } from 'react';
import '../styles/CardList.scss';
import Card from './Card';
import axios from 'axios';


const CardList = () => {

  const[characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
      setCharacters(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);

  return (
      <div className='cards'>
        {characters.map((character) => {
          return <Card name={character.name} key={character.id} id={character.id} location={character.location.name} image={character.image} status={character.status}/>
        })}
      </div>
  )
}

export default CardList
