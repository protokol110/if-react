import React from 'react';
import data from './constants/array';

function HotelInput(props) {
  const input = React.useRef('');
  const inputChange = () => {
    props.setArray(data.filter(({ name, country, city }) =>
    (name + country + city).includes(input.current.value)));
  };

  return (
    <div className="search-form__group destination">
      <label htmlFor="destination" className="destination__label">Your destination or hotel name</label>
      <input
        type="text"
        ref={input}
        name="destination"
        id="destination"
        className="destination__input"
        placeholder=" "
        onChange={inputChange}
        required
      />
    </div>
  );
}

export default HotelInput;
