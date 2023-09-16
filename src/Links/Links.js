import { useParams } from "react-router-dom";

import { movies } from "../movies";

export default function Links() {
  
  const { param } = useParams();

const movie = movies[param-1]

  return (
    <div>
     <h1>{param}</h1>
     <img src={movie.thumbnail}/>
    </div>
  )
}