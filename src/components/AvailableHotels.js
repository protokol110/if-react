import AvailableHeader from './AvailableHeader';
import AvailableContent from './AvailableContent';

function AvailableHotels(props) {
  return (
    <div className="block-homes">
      <AvailableHeader />
      <div className="block-homes__content">
        <AvailableContent data={props.data} />
      </div>
    </div>

  );
}
export default AvailableHotels;
