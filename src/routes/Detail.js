import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Detail.module.css";

function Detail() {
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetails(json.data.movie);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div className={styles.page}>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <h1 className={styles.title}>{details.title}</h1>
          <div className={styles.details}>
            <img
              alt="Poster"
              className={styles.details__cover}
              src={details.medium_cover_image}
            />
            <div>
              <div className={styles.details__categories}>
                <span>{details.year}</span>
                {details.genres.map((genre) => (
                  <span key={genre}>{genre}</span>
                ))}
                <span>❤ {details.like_count}</span>
              </div>
              <p className={styles.details__description}>
                {details.description_full}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
