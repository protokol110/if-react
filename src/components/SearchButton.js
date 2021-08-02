import React from 'react';

function SearchButton({ clickSearch }) {
  return (
    <input
      type="submit"
      value="Search"
      className="submit-btn"
      onClick={clickSearch}
    />
  );
}

export default SearchButton;
