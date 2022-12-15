import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Episodes = (props) => {

  // Nom de l'épisode
  const[episodeName, setEpisodeName] = useState([]);
  // Date de parution de l'épisode
  const[episodeDate, setEpisodeDate] = useState([]);
  // Numéro de l'épisode
  const[episodeNum, setEpisodeNum] = useState([]);

  // Requête vers l'api qui récupère les informations des épisodes
  useEffect(() => {
    axios.get(props.ep)
    .then(function (response) {
     let res = response.data;
     setEpisodeName(res.name);
     setEpisodeDate(res.air_date);
     setEpisodeNum(res.episode)
   })
   .catch(function (error) {
     console.log(error);
   })
  }, []);

  return (
      <li><p><b>{episodeName}</b> - {episodeNum} - <b>date de diffusion :</b> {episodeDate}</p></li>
  )
}

export default Episodes
