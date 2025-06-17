import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import ReviewsList from "../../components/ReviewsList";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3000/movies/" + id).then((res) => {
      const specificPost = res.data;
      setMovieDetail(specificPost);
    });
  }, []);
  return (
    <>
      <div className="container">
        <Card movieDetail={movieDetail} />
        {/* è una call diversa non sto prendendo i dettagli del post ma tutte le review di quel post specifico */}
        <ReviewsList movieDetail={movieDetail} />
      </div>
    </>
  );
}
