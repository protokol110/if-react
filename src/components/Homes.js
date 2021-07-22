import '../style/components/Homes.css';
import HomesHeader from "./HomesHeader";
import React from 'react';
import HomesContent from "./HomesContent";
import arrow from '../svg/arrow.svg'

function Homes() {
  return (
      <div className='block-homes'>
          <HomesHeader/>
            <div className='block-homes__content'>
          <HomesContent/>
            <img src={arrow}
            alt='arrow'
            className='icon-arrows'/>
            </div>
      </div>
  );
}

export default Homes;
