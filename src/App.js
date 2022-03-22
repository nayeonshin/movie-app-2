import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Movie from "./components/Movie";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();

    setMovies(json.data.movies);
    setIsLoading((current) => !current);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              coverImage={movie.medium_cover_image}
              genres={movie.genres}
              key={movie.id}
              summary={movie.summary}
              title={movie.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

Movie.propTypes = {
  coverImage: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default App;
