import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';

import { StyledForm, Input, Button } from './SearchForm.styled';

const SearchForm = ({ value, onChange, onFormSubmit }) => {
  const onSubmitHandle = e => {
    e.preventDefault();
    const query = e.target.elements.searchQuery.value;

    if (query.trim() === '') {
      toast.warning('Enter search query!');
    }
    onFormSubmit(query);
  };

  return (
    <StyledForm autoComplete="off" onSubmit={onSubmitHandle}>
      <Button type="submit">
        <BsSearch aria-label="Search" />
      </Button>

      <Input
        id="searchQuery"
        type="text"
        name="searchQuery"
        value={value}
        placeholder="Search movie"
        onChange={e => onChange(e.target.value)}
        autoFocus
      />
    </StyledForm>
  );
};

SearchForm.protoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
}.isRequired;
export default SearchForm;
