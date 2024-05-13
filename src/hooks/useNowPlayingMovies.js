import React, { useEffect } from 'react'
import { API_Options } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/MovieSlice';

const useNowPlayingMovies = () => {
    const dispatch=useDispatch()
    const getNowPlayingMovies=async()=>{
    // Fetching now playing movies here
    const data=  await  fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
      
      const json = await data.json()
      dispatch(addNowPlayingMovies(json.results))
     
    }
    
    useEffect(()=>{
      getNowPlayingMovies()
    },[])


}

export default useNowPlayingMovies;