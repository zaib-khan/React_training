const ValidIndicator = () => {
  const isValid = true;
  return (
    <div className="m-8 text-2xl flex justify-center">
      {isValid ? 'valid' : 'notValid'}
    </div>
  );
};

export default ValidIndicator;
