import React from 'react';
import AvailableHeader from './AvailableHeader';
import AvailableContent from './AvailableContent';

function AvailableHotels() {
  return (
    <div className="block-homes">
      <AvailableHeader />
      <div className="block-homes__content">
        <AvailableContent />
      </div>
    </div>
  );
}
export default AvailableHotels;
