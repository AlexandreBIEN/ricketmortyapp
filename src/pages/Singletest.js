import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Episodes from '../components/Episodes';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.scss';
import Footer from '../components/Footer';

const Single = () => {

  // Récupération de l'id dans l'url
  const {id} = useParams();

  const[characterEpisodes, setCharacterEpisodes] = useState([]);

  const[characters, setCharacters] = useState([]);

  // Requête vers l'api qui récupère les informations du personnage
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function (response) {
      let res = response.data;
      setCharacters(res);
      setCharacterEpisodes(characters.episode);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);
  return (
    <div>
      <Header />
      <main className='bg-white'>
        <div className="container">
          <div className="row pt-4 pb-4">
            <div className="col-4 text-end">
              <img src={characters.name} alt={`image de ${characters.name}`} />
            </div>
            <div className="col-6">
              <h2>{characters.name}</h2>
              <p>{characters.location.name}</p>
              <p>{characters.name} est un spécimen {characters.species} de type {characters.gender}</p>
              <div className='episodes'>
                <h2>Episodes :</h2>
                <ul>
                  {/* Boucle sur le composant Episodes avec comme propriété l'url de l'épisode */}
                  {characterEpisodes.map((episode) => {
                    return <Episodes ep={episode}/>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Single
