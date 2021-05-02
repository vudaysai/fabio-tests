/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Img } from 'react-image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Loader from './Loader';

function Card({
  thumbnail, innerRef, title, ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div ref={innerRef} {...rest} className="overflow-hidden rounded-lg bg-white shadow-lg h-96">
        <div className="px-4 py-2">
          <div className="font-bold text-md mb-2">{title}</div>
        </div>
        <Img
          className="w-full h-full object-center object-cover shadow-xl"
          src={[thumbnail]}
          alt={title}
          onClick={() => setIsOpen(true)}
          loader={<Loader height="h-64" />}
        />
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={thumbnail}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  innerRef: PropTypes.func.isRequired,
};

export default Card;
