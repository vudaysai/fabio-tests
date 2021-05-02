const Loader = () => {
  const circleCommonClasses = 'h-2.5 w-2.5 bg-green-600 rounded-full';

  return (
    <div className="flex justify-center items-center h-64">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
      <div className={`${circleCommonClasses} animate-bounce400`} />
    </div>
  );
};

export default Loader;
