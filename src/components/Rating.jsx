import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as FullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as EmptyStar } from "@fortawesome/free-regular-svg-icons";

export default function Rating({ vote, maxVote = 5 }) {
  const starsRating = () => {
    const stars = [];

    for (let i = 0; i < maxVote; i++) {
      stars.push(
        i < vote ? (
          <>
            <FontAwesomeIcon icon={FullStar} />
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={EmptyStar} />
          </>
        )
      );
    }
    return stars;
  };

  return <>{starsRating()}</>;
}
