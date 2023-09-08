import {movies} from '../movies'
import MovieCard from '../MovieCard/MovieCard'

import './movielist.css'

export default function MovieList() {
  return (
    <div className='grid-container'>

      {movies.map((e, index)=><MovieCard {...e} key={index} />)}
      {/* On a rajouter key={index} pour que ça re-render que là ou il y aura un changement et donc pour la performance */}
      
    </div>
  )
}