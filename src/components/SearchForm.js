import React from 'react';
import HotelInput from './HotelInput';
import '../style/components/HotelInput.css';
import '../style/components/SearchButton.css';
import SearchButton from './SearchButton';

function SearchForm(props) {
  return (
    <form className="search-form text-form">
      <HotelInput setArray={props.setArray} />
      <SearchButton />
    </form>
  );
}
export default SearchForm;
