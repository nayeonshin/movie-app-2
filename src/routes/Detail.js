import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  console.log(details);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{details.title}</h1>
          <img src={details.medium_cover_image} alt="" />
          <span>{details.year}</span>
          {details.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
          <span>❤ {details.like_count}</span>
          <p>{details.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
