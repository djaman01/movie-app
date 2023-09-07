import {movies} from './movies'
import MovieCard from './MovieCard'

export default function MovieList() {
  return (
    <>
      {movies.map(e=><MovieCard {...e} />)}
    </>
  )
}