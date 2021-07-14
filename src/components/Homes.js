import '../style/components/App.css';
import HomesHeader from "./HomesHeader";
import HomesContent from "./HomesContent";
import arrow from '../arrow.svg'

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
