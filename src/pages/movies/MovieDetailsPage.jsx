import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import ReviewsList from "../../components/ReviewsList";
import Form from "../../components/Form";

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
        <ReviewsList reviews={movieDetail.review} />
        <Form id={id} />
      </div>
    </>
  );
}
