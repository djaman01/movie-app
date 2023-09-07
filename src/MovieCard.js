export default function MovieCard({ title, year, cast, genres, thumbnail, thumbnail_width, thumbnail_height }) {

  return (
    <>

      <div className="thumbnail">
        <img src={thumbnail} alt={title} style={{ height: { thumbnail_height }, width: { thumbnail_width } }} />
      </div>

      <div className="description">
        <div className="name">
          <h1 className="title">{title}</h1>
          <h2 className="genres">{genres}</h2>
          <h2 className="year">{year}</h2>
          <h2 className="cast">{cast}</h2>
        </div>
      </div>

    </>
  )

}