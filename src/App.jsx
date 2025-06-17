import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import MoviesListPage from "./pages/movies/MoviesListPage";
import DefaultLayout from "./layouts/DefaultLayout";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetailsPage from "./pages/movies/MovieDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROTTE CON IN COMUNE IL LAYOUT */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>

          {/* ROTTE CON IN COMUNE IL PREFISSO  */}
          <Route path="/movies">
            <Route path="" element={<MoviesListPage />}></Route>
            <Route path=":id" element={<MovieDetailsPage />}></Route>
          </Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
