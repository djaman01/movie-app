import { useState } from 'react'
import { movies } from '../movies';
import MovieCard from '../MovieCard/MovieCard';
import './filter.css';


export default function Filter() {

  //Pour donner une valeur variable à l'input du search
  const [movie, setMovie] = useState('');

  // On crée l'event handler: function qui va etre activer quand un event sera déclenché; on cible la value de l'input e=event qui est onchange
  const filteredMovie = (e) => setMovie(e.target.value);

  //.includes() peut-être utilisée sur des strings:
  //On veut store dans une array, que les objets dont le titre contient le state movie (qui change de value en direct en fonction de la valeur de l'input).
  //Comme c'est un state dès qu'on va écrire une lettre dans l'input, la value va changer (car onChange) et ca va run the .filter() method
  const filterData = movies.filter((elm) => elm.title.toLowerCase().includes(movie.toLowerCase()));

  //.filterData store uen array avec tous les objets de l'array movie. MAIS grace à .filter():
  //Quand on ajoute un text à l'input ca ne gardera que les objets that have a title with the same values as the input 


  //Le but maintenant est de faire apparaitre ces results:
  //Pour cela: on map sur tous les elements de l'array stored dans .filterData(), qui sont donc des objets
  //et pour chaque element/objets, on le remplace par un <div></div> qui contient le component qui avec l'affiche et avec pour probs, toutes les properties de l'objet/element sur le quel on map

  const filteredMovies = filterData.map((e) => (
    <div>
      <MovieCard {...e} />
    </div>
    // <div> {/* Make sure to assign a unique key */}
    //   {movie.title} 
    //   {movie.year}
    // </div>
  ));

  //Maintenant dans le return, on peut ajouter:
  //1) Le input / 2) le onChange = {filteredMovie} qui est l'event handler qui va run la update method et change la state value 
  //3)Sous le input ajouter {filteredMovies} pour faire apparaitre les affiches des movies filtré après avoir écris dans l'input

  return (
    <>
      {/* Comme on veut donner à l'input une value qui change, on va utiliser le hook useState */}
      {/* on donne à l'input la valeur du state + quand on change l'input, on change la valeur */}
      {/* on peut mettre onChange directement dans l'input avec la l'event handler filtered movie, grace à JSX */}
      <input value={movie} type="text" placeholder="Filter" onChange={filteredMovie} />
      <div className="grid-filter">
        {filteredMovies}
      </div>

    </>
  );
}
