import { PropTypes } from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, MovieName } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(({ poster_path, id, title }) => (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
            <MovieName>{title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};
