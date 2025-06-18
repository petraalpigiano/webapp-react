import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function ReviewCard({}) {
  return (
    <>
      <div className="card ">
        <div className="d-flex justify-content-center">
          <FontAwesomeIcon icon={faCircleUser} />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center ">{movieDetail.name}</h5>
          <p className="card-text">{movieDetail.text}</p>
          <p className="card-text">{movieDetail.vote}</p>
          <p className="card-text">{movieDetail.created_at}</p>
          <p className="card-text">{movieDetail.updated_at}</p>
        </div>
      </div>
    </>
  );
}
