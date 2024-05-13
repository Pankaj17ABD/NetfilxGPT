import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTrailerVedio } from '../utils/MovieSlice'
import { API_Options } from '../utils/Constants'

const useTrailer = (movieID) => {
    const dispatch = useDispatch()
  
    const getMovies = async () => {
      // Fetch An API 1:36
      // 2:03
     const data=await fetch('https://api.themoviedb.org/3/movie/'+movieID+'/videos?language=en-US', API_Options)
    const json = await data.json();
 
    const filterData= json.results.filter((vedio)=>vedio.type==="Trailer")
    const trailer= filterData.length?filterData[0]: json.results[0]
  
      dispatch(addTrailerVedio(trailer))
    }
  
    useEffect(()=>{
      getMovies()
    },[])
 
}

export default useTrailer