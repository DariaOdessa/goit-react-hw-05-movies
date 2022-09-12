import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function getCredits() {
      try {
        const data = await getMovieCredits(id);
        const cast = data.cast;
        setCredits(cast);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    getCredits();
  }, [id]);

  console.log(credits);

  return (
    <div>
      {credits.length > 0 ? (
        <CastList actors={credits} />
      ) : (
        'We have no cast for this movie'
      )}
    </div>
  );
};

export default Cast;
