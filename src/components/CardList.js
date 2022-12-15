import React, { useEffect, useState } from 'react';
import '../styles/CardList.scss';
import Card from './Card';
import axios from 'axios';


const CardList = () => {

  // Information des personnages
  const[characters, setCharacters] = useState([]);

  // numéro de la page demandé
  const[page, setPage] = useState(1);

  // Fonction qui fait une requête vers l'api et récupère les 20 premier personnages
  const getCharacter = (page) => {
    axios.get('https://rickandmortyapi.com/api/character?page=' + page)
    .then(function (response) {
      // On renseigne les informations des personnages dans une variable
      setCharacters(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  useEffect(() => {
    getCharacter(page)
  }, [page]);

  // Fonction pour aller à la page précédente
  const handlePrevious = () => {
    if(page != 1){
      let PrevPage = page - 1;
      setPage(PrevPage);
    }
  }

  // Fonction pour aller à la page suivante
  const handleNext = () => {
      let nextPage = page + 1;
      setPage(nextPage); 
  }

  return (
    <main>
      {/* Bouton pagination */}
      <div className='pagination'>
        <button className='card-btn' onClick={() => handlePrevious(page)}>Précédent</button>
        <p className='text-white'>Page {page}</p>
        <button className='card-btn' onClick={() => handleNext(page)}>Suivant</button>
      </div>
      {/* Liste des personnages */}
      <div className='cards'>
        {characters.map((character) => {
          return <Card name={character.name} key={character.id} id={character.id} location={character.location.name} image={character.image} status={character.status}/>
        })}
        
      </div>
      {/* Bouton pagination */}
      <div className='pagination'>
        <button className='card-btn' onClick={() => handlePrevious(page)}>Précédent</button>
        <p className='text-white'>Page {page}</p>
        <button className='card-btn' onClick={() => handleNext(page)}>Suivant</button>
      </div>
      
    </main>
      
  )
}

export default CardList
