import { Formik } from 'formik';
import { toast } from 'react-toastify';

import { BsSearch } from 'react-icons/bs';

import { StyledForm, Label, Input, Button } from './SearchForm.styled';

const SearchForm = ({ onFormSubmit }) => {
  const onSubmitHandle = ({ searchQuery }) => {
    if (searchQuery.trim() === '') {
      toast.warning('Enter search query!');
    }
    onFormSubmit(searchQuery);
  };

  return (
    <Formik initialValues={{ searchQuery: '' }} onSubmit={onSubmitHandle}>
      <StyledForm autoComplete="off">
        <Button type="submit">
          <BsSearch aria-label="Search" />
        </Button>

        <Label htmlFor="searchQuery" />

        <Input
          id="searchQuery"
          type="text"
          name="searchQuery"
          // value={value}
          placeholder="Search movie"
          // onChange={e => onChange(e.target.value)}
          autoFocus
        />
      </StyledForm>
    </Formik>
  );
};

export default SearchForm;
