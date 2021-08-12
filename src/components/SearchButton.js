import React from 'react';

function SearchButton({ searchSubmitHandler }) {
  return (
    <input
      type="submit"
      value="Search"
      className="submit-btn"
      onClick={searchSubmitHandler}
    />
  );
}

export default SearchButton;
