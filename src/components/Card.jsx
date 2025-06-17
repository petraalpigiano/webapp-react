export default function Card({ movieDetail }) {
  return (
    <>
      <div className="card ">
        <div className="d-flex justify-content-center">
          <img
            src={movieDetail.image}
            className="card-img-top movie-card text-center"
            alt={movieDetail.title}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center ">{movieDetail.title}</h5>
          <p className="card-text">{movieDetail.abstract}</p>
          <p className="card-text">{movieDetail.created_at}</p>
          <p className="card-text">{movieDetail.updated_at}</p>
        </div>
      </div>
    </>
  );
}
