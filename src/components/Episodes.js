import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Episodes = (props) => {

  const[episodeName, setEpisodeName] = useState([]);
  const[episodeDate, setEpisodeDate] = useState([]);
  const[episodeNum, setEpisodeNum] = useState([]);


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
