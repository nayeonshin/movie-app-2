function Movie({ coverImage, genres, summary, title }) {
  return (
    <div>
      <img alt={`${title}'s Cover`} src={coverImage} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres?.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
