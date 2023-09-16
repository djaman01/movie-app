import React from 'react'

import { useState } from 'react'
import { movies } from '../movies';
import MovieCard from '../MovieCard/MovieCard';
import '../Filter/filter.css'

export default function FilterGenre() {

  const [genre, setGenre] = useState('');

  const handleGenre = (e) => setGenre(e.target.value);

  const filteredGenre = movies.filter(element => element.genres.toLowerCase().includes(genre.toLowerCase()));

  return (
    <div>
      <input value={genre} type="text" placeholder="Filter by genre" onChange={handleGenre} />
      <div className="grid-filter">
        {filteredGenre.map((e, i) => <MovieCard {...e} key={i} />)}
      </div>
    </div>
  )
}
