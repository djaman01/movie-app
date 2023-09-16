import './moviecard.css'
import Buttons from '../Buttons/Buttons'
import { Link } from "react-router-dom";



export default function MovieCard({ title, year, cast, genres, thumbnail, thumbnail_width, thumbnail_height, id}) {

  return (

    <>
  
      <div className="all-card">

        <div className="thumbnail">
          <Link to={`/Links/${id}`}> 
            <img src={thumbnail} alt={title} style={{ width: thumbnail_width, height: thumbnail_height }} />
          </Link>
        </div>

        <div className="description">
          <div className="name">
            <h1 className="title">{title}</h1>
            <div className="subdiv">
              <h2 className="genres">{genres}</h2>
              <h2 className="year">{year}</h2>
            </div>
            <h3 className="cast">{cast}</h3>
          </div>
        </div>

        <div>
          <Buttons />
        </div>

      </div>

    </>


  )

}