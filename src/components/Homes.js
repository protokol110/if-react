import '../style/components/Homes.css';
import React from 'react';
import HomesHeader from './HomesHeader';
import HomesContent from './HomesContent';

function Homes() {
  return (
    <div className="block-homes">
      <HomesHeader />
      <div className="block-homes__content">
        <HomesContent />
      </div>
    </div>
  );
}

export default Homes;
