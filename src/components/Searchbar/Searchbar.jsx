import PropTypes from 'prop-types';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  SearchForm,
  SearchButton,
  SearchIcon,
  SearchLabel,
  Input,
} from './Searchbar.styled';

const Searchbar = ({ handleSubmit }) => {
  const [value, setValue] = useState('');

  const onSearchSubmit = () => {
    handleSubmit(value);

    if (value === '') {
      Notify.warning('Input is still empty, please type something!', {
        width: '400px',
        fontSize: '20px',
        position: 'center-top',
        distance: '50px',
      });
      return;
    }
    setValue('');
  };

  return (
    <SearchForm onSubmit={onSearchSubmit}>
      <SearchButton type="submit">
        <SearchLabel>
          <SearchIcon />
        </SearchLabel>
      </SearchButton>

      <Input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={e => setValue(e.currentTarget.value)}
        value={value}
      />
    </SearchForm>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
