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

  // listes des épisodes où le personnage apparaît
  const[characterEpisodes, setCharacterEpisodes] = useState([]);

  // Nom du personnage
  const[characterName, setCharacterName] = useState("");
  // Localisation du personnage
  const[characterLocation, setCharacterLocation] = useState("");
  // Espèce du personnage
  const[characterSpecies, setCharacterSpecies] = useState("");
  // Genre du personnage
  const[characterGender, setCharacterGender] = useState("");
  // Image du personnage
  const[characterImage, setCharacterImage] = useState("");

  // Requête vers l'api qui récupère les informations du personnage
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function (response) {
      let res = response.data;
      // Enregistre les informations dans des variables
      setCharacterEpisodes(res.episode);
      setCharacterName(res.name);
      setCharacterLocation(res.location.name);
      setCharacterSpecies(res.species);
      setCharacterGender(res.gender);
      setCharacterImage(res.image);
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
              <img src={characterImage} alt={`image de ${characterName}`} />
            </div>
            <div className="col-sm">
              <h2>{characterName}</h2>
              <p>{characterLocation}</p>
              <p>{characterName} est un spécimen {characterSpecies} de type {characterGender}</p>
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
