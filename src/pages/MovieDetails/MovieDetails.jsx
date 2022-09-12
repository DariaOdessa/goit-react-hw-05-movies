import { Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { useState, useEffect } from 'react';
import BackLink from '../../components/BackLink/Backlink.jsx';
import {
  MovieWrapper,
  Poster,
  DetailsWrapper,
  Tagline,
  Title,
  Overview,
  DetailsLink,
  LinkList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  console.log(location);

  useEffect(() => {
    async function getFilm() {
      try {
        const film = await getMovieDetails(id);
        setMovie(film);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    getFilm();
  }, [id]);

  console.log(movie);
  const { poster_path, title, overview, tagline } = movie;

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MovieWrapper>
        <Poster
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <DetailsWrapper>
          <Title>{title}</Title>
          {tagline && <Tagline>"{tagline}"</Tagline>}
          <Overview>{overview}</Overview>
          <LinkList>
            <li>
              <DetailsLink to="cast" state={{ from: location.state.from }}>
                Cast
              </DetailsLink>
            </li>
            <li>
              <DetailsLink to="reviews" state={{ from: location.state.from }}>
                Reviews
              </DetailsLink>
            </li>
          </LinkList>
        </DetailsWrapper>
      </MovieWrapper>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
