
import './Banner.css';
import {useEffect, useState} from 'react';
import axios from '../api/axios';
import requests from '../api/requests';

const Banner = () => {
    const [movie,setMovie] = useState({})

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
        const request = await axios.get(requests.fetchNowPlaying);
        console.log(request);
        const movieId = 
        request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ].id;

        const { data : movieDetail} = await axios.get(`movie/${movieId}`,{
            params:{append_to_response:"videos"},
    });
    setMovie(movieDetail);
    }
    
  return (
    <div>Banner</div>
  )
}

export default Banner