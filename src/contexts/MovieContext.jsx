import axios from "axios";

import { createContext, useContext, useState } from "react";
const MovieContext = createContext();

function MovieProvider({ children }) {
  const apiURL = "https://api.themoviedb.org/3";
  const apiKey = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const moviesPlusSeries = movies.concat(series);

  // function search(input) {
  //   axios
  //     .get(`${apiURL}/search/movie?query=${input}&api_key=${apiKey}`)
  //     .then((res) => {
  //       setMovies(res.data.results);
  //     });
  //   axios
  //     .get(`${apiURL}/search/tv?query=${input}&api_key=${apiKey}`)
  //     .then((res) => {
  //       const response = res.data.results.map(function (currentSerie) {
  //         return {
  //           id: currentSerie.id,
  //           title: currentSerie.name,
  //           vote_average: currentSerie.vote_average,
  //           original_title: currentSerie.original_name,
  //           original_language: currentSerie.original_language,
  //           poster_path: currentSerie.poster_path,
  //         };
  //       });
  //       setSeries(response);
  //     });
  // }

  return (
    <>
      <MovieContext.Provider
        value={{ movies, search, series, moviesPlusSeries }}
      >
        {children}
      </MovieContext.Provider>
    </>
  );
}

function useMovie() {
  return useContext(MovieContext);
}

export { useMovie, MovieProvider };
