import { Link } from "react-router-dom";

export default function ReviewsList({ movieDetail }) {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {/* <Link to={`/posts/${currentCard.id}`} className="card h-100 link"> */}
          <tr key={movieDetail.id}>
            <td>avatar</td>
            <td>{movieDetail.title}</td>
            <td>voto</td>
            <td>boh</td>
          </tr>
          {/* </Link> */}
        </tbody>
      </table>
    </>
  );
}
