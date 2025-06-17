import { Link } from "react-router-dom";

export default function MoviesList({ moviesList }) {
  return (
    <>
      {moviesList.map(function (currentCard) {
        return (
          <div className="col" key={currentCard.id}>
            <Link to={`/movies/${currentCard.id}`} className="card h-100 link">
              <img
                src={currentCard.image}
                className="card-img-top"
                alt={currentCard.title}
              />
              <div className="card-body ">
                <h5 className="card-title text-center">{currentCard.title}</h5>
                <p className="card-text">{currentCard.director}</p>
                <p className="card-text">{currentCard.genre}</p>
                <p className="card-text">{currentCard.release_year}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}
