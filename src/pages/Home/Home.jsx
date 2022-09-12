import { useState, useEffect } from 'react';
import { getTrendyMovies } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await getTrendyMovies();
        const trendieMovies = data.results;
        setMovies(trendieMovies);
        return;
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
