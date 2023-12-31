import { useEffect, useState } from 'react'
import { movies } from '../movies';
import MovieCard from '../MovieCard/MovieCard';
import './filter.css';
import HomeButton from '../HomeButton/HomeButton';
import FilterGenre from '../FilterGenre/FilterGenre';


export default function Filter() {
  //Pour donner une valeur variable à l'input du search
  const [movie, setMovie] = useState('');

  // On crée l'event handler: function qui va etre activer quand un event sera déclenché, pour que la value de la state variable soit =à la value de l'inpu lorsque l'event sera déclenché
  const filteredMovie = (e) => setMovie(e.target.value);

  //.includes() peut-être utilisée sur des strings:
  //On veut store dans une array, que les objets dont le titre contient la value de la state 'movie' (qui change de value en direct en fonction de la valeur de l'input).
  //Comme c'est un state dès qu'on va écrire une lettre dans l'input, la value va changer (car onChange) et ca va run the .filter() method
  //On écrit hors du return, car on ne fait que store dans une variable, pour écrire les choses plus brievement dans le return
  const filterData = movies.filter((elm) => elm.title.toLowerCase().includes(movie.toLowerCase()));

  //.filterData store uen array avec tous les objets de l'array movie. MAIS grace à .filter():
  //Quand on ajoute un text à l'input ca ne gardera que les objets that have a title with the same values as the input 

  //J'utilise le Hook useEffect pour donner un nom à ma page dès le 1er rendering. 
  //Ceci est du au fait que j'ai mis [] en tant que 2eme parametre
  //Si je n'avais rien mis, dès qu'il y aurait un state change, le nom de la page va re-render
  //Et si je met le nom d'un ou plusieurs state, le nom de la page changerait dès qu'il y aurait un update de ces states
  useEffect(() => { document.title = "Jay Movie App" }, [])

//On va maintenant créer un bouton pour changer de filtre et passer d'un filtre par titre à un filtre par genre
//On crée une state variable que quand on va cliquer sur le bouton, sa valeur va changer
//Pour cela on donne d'abord une valeur, true, par défaut à la state variable
  const [toggle, setToggle] = useState(true);

//Comme on veut créer 1 bouton que quand on clique et re-clique, ca change de filtre:
//Pour que le bouton puisse Toggle entre filtre, on donne à la update methode l'inverse de la state variable value
//Ainsi à chaque fois qu'on va cliquer, la valeur de la state variable va changer
  const handleToggle = () => setToggle(!toggle);

    //Le but maintenant est de faire apparaitre ces results:
  //Pour cela: on map sur tous les elements de l'array stored dans .filterData(), comme on a l'habitude de faire
  //Maintenant dans le return, on peut ajouter:
  //1) Le input /2) La value = {state variable} car elle peut changer en cas d'activation de l'event handler et 3) le onChange = {filteredMovie} qui est l'event handler qui va run la update method et change la state value 
  return (
    <>
      <div class="main-home-button">
        <HomeButton />
      </div>

      <button className="toggle-button" onClick={handleToggle}>Change Filter</button>

      {(toggle) ?
        <div className='body'>

          <input value={movie} type="text" placeholder="Filter by Title" onChange={filteredMovie} />
          <div className="grid-filter">
            {filterData.map((e, i) => <MovieCard {...e} key={i} />)}
          </div>

        </div> : <FilterGenre />}


    </>
  );
}
