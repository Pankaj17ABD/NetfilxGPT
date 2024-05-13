import React from 'react'
import VedioBackGround from './VedioBackGround'
import VedioTitle from './VedioTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies=useSelector(state => state?.movies?.nowPlayingMovies)


    if(!movies)return
    const mainMovie=movies[0]

    const {original_title,overview,id,release_date}=mainMovie

  return (
    <div>
        <VedioTitle title ={original_title} overview={overview}/>
        <VedioBackGround movieID={id}/>
    </div>
  )
}

export default MainContainer