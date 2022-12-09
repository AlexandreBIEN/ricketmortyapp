import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Episodes from '../components/Episodes';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.scss';

const Single = () => {

  const {id} = useParams();

  const[characterEpisodes, setCharacterEpisodes] = useState([]);

  const[characterName, setCharacterName] = useState("");
  const[characterLocation, setCharacterLocation] = useState("");
  const[characterSpecies, setCharacterSpecies] = useState("");
  const[characterGender, setCharacterGender] = useState("");
  const[characterImage, setCharacterImage] = useState("");

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function (response) {
      let res = response.data;
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
            <div className="col-6">
              <h2>{characterName}</h2>
              <p>{characterLocation}</p>
              <p>{characterName} est un spécimen {characterSpecies} de type {characterGender}</p>
              <div className='episodes'>
                <h2>Episodes :</h2>
                <ul>
                  {characterEpisodes.map((episode) => {
                    return <Episodes ep={episode}/>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Single
