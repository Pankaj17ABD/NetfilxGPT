import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {

  const movies = useSelector(store => store.movies);


  return (
    <div className='bg-black '>
      <div className='-mt-52 pl-12 relative z-20'>
        <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Romantic"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList title={"Comedy"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondryContainer