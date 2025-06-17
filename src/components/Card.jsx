export default function Card({ movieDetail }) {
  return (
    <>
      <div className="card ">
        <img
          src={"http://localhost:3000" + movieDetail.image}
          className="card-img-top"
          alt={movieDetail.title}
        />
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
