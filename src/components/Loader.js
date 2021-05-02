import PropTypes from 'prop-types';

const Loader = ({ height }) => {
  const circleCommonClasses = 'h-2.5 w-2.5 bg-green-600 rounded-full';

  return (
    <div className={`flex justify-center items-center ${height}`}>
      <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
      <div className={`${circleCommonClasses} animate-bounce400`} />
    </div>
  );
};

Loader.propTypes = {
  height: PropTypes.string,
};

Loader.defaultProps = {
  height: 'h-0',
};

export default Loader;
