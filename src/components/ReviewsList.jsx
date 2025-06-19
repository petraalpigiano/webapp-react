import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Rating from "./Rating";

export default function ReviewsList({ reviews }) {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">User's Name</th>
            <th scope="col">User's Review</th>
            <th scope="col">User's Vote</th>
          </tr>
        </thead>
        <tbody>
          {reviews ? (
            <>
              {reviews.map(function (currentReview, index) {
                return (
                  <tr key={index}>
                    <td>
                      <FontAwesomeIcon icon={faCircleUser} />
                    </td>
                    <td>{currentReview.name}</td>
                    <td>{currentReview.text}</td>
                    <td>
                      <Rating vote={currentReview.vote} />
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </>
  );
}
