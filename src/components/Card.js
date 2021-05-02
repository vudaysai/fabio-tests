import PropTypes from 'prop-types';
import { Img } from 'react-image';

import Loader from './Loader';

function Card({ thumbnail, title }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg h-96 ">
      <div className="px-4 py-2">
        <div className="font-bold text-md mb-2">{title}</div>
      </div>
      <Img
        className="w-full h-full object-center object-cover shadow-xl"
        src={[thumbnail]}
        alt={title}
        loader={<Loader />}
      />
    </div>
  );
}

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
