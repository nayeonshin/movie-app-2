import { useEffect, useState } from "react";
import Movie from "../components/Movie";

import styles from "./Home.module.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();

    setMovies(json.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              coverImage={movie.medium_cover_image}
              genres={movie.genres}
              id={movie.id}
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

export default Home;
