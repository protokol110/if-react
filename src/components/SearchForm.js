import React from 'react';
import HotelInput from './HotelInput';
import SearchButton from './SearchButton';
import AvailableHotels from './AvailableHotels';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: '',
    };
    this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
    this.searchInputHandler = this.searchInputHandler.bind(this);
  }

  componentDidMount() {
    fetch('https://fe-student-api.herokuapp.com/api/hotels')
      .then((res) => res.json());
  }

  searchInputHandler(e) {
    e.preventDefault();
    const newValue = e.target.value;
    this.setState({ value: newValue });
  }

  searchSubmitHandler(e) {
    e.preventDefault();
    const { value } = this.state;
    fetch('https://fe-student-api.herokuapp.com/api/hotels')
      .then((res) => res.json())
      .then((arr) => this.setState({ items: arr }))
      .catch(() => this.setState({ items: [] }));
  }

  render() {
    return (
      <>
        <form className="search-form text-form">
          <HotelInput onChange={this.searchInputHandler} />
          <SearchButton onClick={this.searchSubmitHandler} />
        </form>
        {this.state.items?.length ? <AvailableHotels hotel={this.state.items} /> : null}
      </>
    );
  }
}
/*
function SearchForm() {
  let valueInput = '';
  const input = React.useRef('');
  const inputChange = () => {
    valueInput = input.current.value;
    console.log(valueInput);
  };
  const clickSearch = () => {
    data.filter(({ name, country, city }) => (name + country + city).includes(input.current.value));
  };
  return (
    <>
      <form className="search-form text-form">
        <HotelInput onClick={inputChange} />
        <SearchButton onChange={clickSearch} />
      </form>

    </>
  );
}
export default SearchForm;
*/
