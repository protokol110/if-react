import React from 'react';

export default class HomesContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
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
    } if (!isLoaded) {
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
}
/* function HomesContent() {
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
} */
