import { useParams } from "react-router-dom";

import { movies } from "../movies";

export default function Links() {

  //Ici on va utiliser le react Hook useParams afin d'accéder à la fin de l'url = parametre, que nous avons défini comme étant l'id de chaque objet
  const { param } = useParams();

   //En accédant aux id des objets qui commence par 1 (car id=0 est à éviter), on pourra ainsi accéder à chaque élement de l'array movies et donc à chaque objet
   //Chaque element étant un ibjet qui représente un film, on store chaque objet dans une variable du nom de movie
  const movie = movies[param - 1]

//Ainsi, on pourra facilement accéder aux propriété de chaque objet et les utiliser
  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movie.description}</h2>
      <iframe width="560" height="315" src= {movie.source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}