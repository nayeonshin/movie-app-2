import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImage, genres, summary, title }) {
  return (
    <div>
      <img alt={`${title}'s Cover`} src={coverImage} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
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
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;