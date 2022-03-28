import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Movie.module.css";

function Movie({ coverImage, genres, id, summary, title, year }) {
  return (
    <Link className={styles.link} to={`/movie/${id}`}>
      <div className={styles.movie}>
        <img
          alt={`${title}'s Cover`}
          className={styles.movie__img}
          src={coverImage}
        />
        <h2 className={styles.movie__title}>{title}</h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <ul className={styles.movie__genres}>
          {genres?.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p className={styles.movie__summary}>
          {summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}
        </p>
      </div>
    </Link>
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
