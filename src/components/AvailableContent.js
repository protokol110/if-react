import React from 'react';

/* export default class AvailableContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <p>
          Error
          {error.message}
        </p>
      );
    }
    if (!isLoaded) {
      return <p>Loading...</p>;
    }
    return (items.map((elem) => (
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
} */

function AvailableContent(props) {
  const {
    name, city, country, imageUrl, id,
  } = props;

  return (
    <div className="block-homes__container-image" key={id}>
      <div className="block-homes__container-image-first block-1-hotels">
        <img
          src={imageUrl}
          alt={name}
          className="image-1-hotels"
        />
        <p className="block-homes__container-text">
          {name}
        </p>
        <p className="block-homes__container-text-grey">
          {city}
          ,
          {country}
        </p>
      </div>
    </div>
  );
}
export default AvailableContent;
