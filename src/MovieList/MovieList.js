import {movies} from '../movies'
import MovieCard from '../MovieCard/MovieCard'

import './movielist.css'

export default function MovieList() {
  return (
    <div className='grid-container'>

      {movies.map(e=><MovieCard {...e} />)}
      
    </div>
  )
}