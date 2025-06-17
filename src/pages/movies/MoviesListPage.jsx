import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList";

export default function MoviesListPage() {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((res) => {
      const listPosts = res.data;
      setMoviesList(listPosts);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <MoviesList moviesList={moviesList} />
        </div>
      </div>
    </>
  );
}
