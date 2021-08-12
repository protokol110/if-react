import React from 'react';
import SearchForm from './SearchForm';
import Homes from './Homes';

import '../style/components/Homes.css';
import '../style/components/HotelInput.css';
import '../style/components/SearchButton.css';

function App() {
  return (
    <>
      <SearchForm />
      <Homes />
    </>
  );
}

export default App;
