import React from 'react'
import VedioBackGround from './VedioBackGround'
import VedioTitle from './VedioTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies=useSelector(state => state?.movies)
    console.log(movies?.nowPlayingMovies,"....")
  return (
    <div>
        <VedioTitle/>
        <VedioBackGround/>
    </div>
  )
}

export default MainContainer