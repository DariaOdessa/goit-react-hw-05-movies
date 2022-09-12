import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import { getSearchedMovies } from 'services/api';
import { Message } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    async function getMovies() {
      try {
        const data = await getSearchedMovies(query);
        setMovies(data.results);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [query]);

  const onFormSubmit = (e, query) => {
    e.preventDefault();
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams({ nextQuery });
    setMovies([]);
  };

  return (
    <div>
      <Searchbar handleSubmit={onFormSubmit} />
      {movies?.length > 0 && <MoviesList movies={movies} />}

      {movies?.length === 0 && query !== '' && (
        <Message>
          Sorry, there is no films for your results! Try to find something else!
        </Message>
      )}
    </div>
  );
};

export default Movies;
