import './moviecard.css'
import Buttons from '../Buttons/Buttons'

export default function MovieCard({ title, year, cast, genres, thumbnail, thumbnail_width, thumbnail_height }) {

  const alerting = () => alert(`you're clicking on ${title}`)

  return (

    <>
  
      <div className="all-card">

        <div className="thumbnail">
          <img onClick={alerting} src={thumbnail} alt={title} style={{ width: thumbnail_width, height: thumbnail_height }} />
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
          {<Buttons />}
        </div>

      </div>

    </>


  )

}