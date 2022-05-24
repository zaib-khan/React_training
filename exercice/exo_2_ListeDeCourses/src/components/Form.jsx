import { useState } from 'react';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Form = ({ updateTab }) => {
  const [produit, setProduit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTab(produit);
  };
  const changeHandler = (e) => {
    setProduit(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-around py-4">
      <div className="w-1/2 mb-4">
        <label htmlFor="data" className="block font-medium text-gray-700">
          Produits a ajouter à la liste de courses :
        </label>
        <input
          type="text"
          className="block w-full px-2 py-1 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          id="data"
          name="data"
          onChange={changeHandler}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-3 py-2 font-medium text-white text-lg bg-indigo-600 duration-200 hover:bg-indigo-700 rounded-md">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default Form;
