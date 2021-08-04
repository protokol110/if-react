import '../style/components/Homes.css';
import React from 'react';
import HomesHeader from './HomesHeader';
import HomesContent from './HomesContent';

function Homes(props) {
  return (
    <div className="block-homes">
      <HomesHeader />
      <div className="block-homes__content">
        <HomesContent data={props.data} />
      </div>
    </div>
  );
}

export default Homes;
