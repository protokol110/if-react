import React from 'react';

/* export default class HotelInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://fe-student-api.herokuapp.com/api/hotels')
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
    const input = React.useRef('');
    const inputChange = () => {
      this.props.setArray(items.filter(({
        name,
        country,
        city,
      }) => (name + country + city).includes(input.current.value)));
    };
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
    return (
      <div className="search-form__group destination">
        <label htmlFor="destination" className="destination__label">
          Your destination or hotel name
        </label>
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
}

 */

function HotelInput({ input }, { inputChange }) {
  return (
    <div className="search-form__group destination">
      <label htmlFor="destination" className="destination__label">
        Your destination or hotel name
      </label>
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
