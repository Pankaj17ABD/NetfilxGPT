import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
const Browse = () => {
  useNowPlayingMovies()
  

  return (
    <div>
      
      <Header/>
      <MainContainer/>
      <SecondryContainer/>
      {/* 
      Maincontainer
        - Vediobackground
        - Vediotitle

      SecondryContainer
        - MovieList
        - Cards
      */}
      </div>
  )
}

export default Browse