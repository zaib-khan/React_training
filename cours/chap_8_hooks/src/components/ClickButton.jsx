import { useState } from 'react';

const ClickButton = () => {
  // 1) On ne mettre jamais un hook dans une condition
  // 2) Les hooks seront déclarée tout en haut de du component. L'ordre est important (dans cetain cas)
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      className=" p-4 rounded mr-4 text-white bg-blue-500"
      onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

export default ClickButton;
