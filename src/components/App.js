import React from 'react';
import SearchForm from './SearchForm';
import Homes from './Homes';
import data from './constants/array';
import AvailableHotels from './AvailableHotels';

import '../style/components/Homes.css';
import '../style/components/HotelInput.css';
import '../style/components/SearchButton.css';

function App() {
  return (
    <>
      <SearchForm />
      <AvailableHotels />
      <Homes />
    </>
  );
}

export default App;
