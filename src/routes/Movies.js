import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import LoadingSpinner from "../components/common/LoadingSpinner"

function Movies(){
    
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const getMovieList = async() => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    setMovieList(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovieList();
  }, []);

  console.log(movieList);
  return (
    <div>
      {loading ? 
      (
        <LoadingSpinner/>
      ) : (
        <div>
          {movieList.map((movie) => (
            <Movie 
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary} 
              genres={movie.genres} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;