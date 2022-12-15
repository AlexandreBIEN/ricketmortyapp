import React, { useEffect, useState } from 'react';
import '../styles/CardList.scss';
import Card from './Card';
import axios from 'axios';


const CardList = () => {

  // Information des personnages
  const[characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
      // On renseigne les informations des personnages dans une variable
      setCharacters(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);

  return (
      <main className='cards'>
        {characters.map((character) => {
          return <Card name={character.name} key={character.id} id={character.id} location={character.location.name} image={character.image} status={character.status}/>
        })}
      </main>
  )
}

export default CardList
