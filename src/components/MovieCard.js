import React from 'react'
import { IMG_CDN_URL } from '../utils/Constants'

const MovieCard = ({ posterPath }) => {

    return (
        <div className='w-48 pr-4'>
            <img alt="Movie Poster" src={IMG_CDN_URL + posterPath} />
        </div>
    )
}

export default MovieCard