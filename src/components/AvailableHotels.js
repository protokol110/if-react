import React from 'react';
import AvailableHeader from './AvailableHeader';
import AvailableContent from './AvailableContent';

function AvailableHotels({ items }) {
  return (
    <div className="block-homes">
      <AvailableHeader />
      <div className="block-homes__content">
          <AvailableContent data={items} />
      </div>
    </div>
  );
}
export default AvailableHotels;
