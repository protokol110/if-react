import '../style/components/Homes.css';
import React from 'react';
import SearchForm from './SearchForm';
import Homes from './Homes';
import data from './constants/array';
import AvailableHotels from "./AvailableHotels";

function App() {
  const [array, setArray] = React.useState(data);
  return (
    <>
      <SearchForm setArray={setArray} />
      <Homes data={array} />
    </>
  );
}

export default App;
