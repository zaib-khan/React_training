const Animal = () => {
  const who = 'dog';
  return (
    <div className="m-8">
      {who === 'cat' && "c'est un chat "}
      {who === 'dog' && "c'est un dog "}
    </div>
  );
};

export default Animal;
