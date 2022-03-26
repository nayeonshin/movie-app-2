import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Movie.module.css";

function Movie({ coverImage, genres, id, summary, title, year }) {
  return (
    <div className={styles.movie}>
      <img
        alt={`${title}'s Cover`}
        className={styles.movie__img}
        src={coverImage}
      />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres?.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImage: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
