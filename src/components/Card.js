/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Img } from 'react-image';

import Loader from './Loader';

function Card({
  thumbnail, innerRef, title, ...rest
}) {
  return (
    <div ref={innerRef} {...rest} className="overflow-hidden rounded-lg bg-white shadow-lg h-96">
      <div className="px-4 py-2">
        <div className="font-bold text-md mb-2">{title}</div>
      </div>
      <Img
        className="w-full h-full object-center object-cover shadow-xl"
        src={[thumbnail]}
        alt={title}
        loader={<Loader height="h-64" />}
      />
    </div>
  );
}

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  innerRef: PropTypes.func.isRequired,
};

export default Card;
