import React from 'react';
import data from './constants/array';

function HomesContent() {
  return (data.map((elem) => (
    <div className="block-homes__container-image" key={elem.id}>
      <div className="block-homes__container-image-first block-1-hotels">
        <img
          src={elem.imageUrl}
          alt={elem.name}
          className="image-1-hotels"
        />
        <p className="block-homes__container-text">
          {elem.name}
        </p>
        <p className="block-homes__container-text-grey">
          {elem.city}
          ,
          {elem.country}
        </p>
      </div>
    </div>
  ))
  );
}
export default HomesContent;
