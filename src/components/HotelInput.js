import React from 'react';

function HotelInput({ searchInputHandler }, { value }) {
  return (
    <div className="search-form__group destination">
      <label htmlFor="destination" className="destination__label">
        Your destination or hotel name
      </label>
      <input
        type="text"
        name="search"
        value={value}
        id="destination"
        className="destination__input"
        placeholder=" "
        onChange={searchInputHandler}
        required
      />
    </div>
  );
}

export default HotelInput;
