import React from 'react';
import HotelInput from './HotelInput';
import SearchButton from './SearchButton';

function SearchForm() {
  let valueInput = '';
  const input = React.useRef('');
  const inputChange = () => {
    valueInput = input.current.value;
    console.log(valueInput);
  };
  const clickSearch = () => {
    data.filter(({ name, country, city }) => (name + country + city).includes(input.current.value));
  }; // eto nado popravit'
  return (
    <>
      <form className="search-form text-form">
        <HotelInput onClick={clickSearch} />
        <SearchButton onChage={inputChange} />
      </form>

    </>
  );
}
export default SearchForm;
