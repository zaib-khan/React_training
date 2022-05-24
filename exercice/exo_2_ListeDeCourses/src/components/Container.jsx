import { useState } from 'react';
import Form from './Form';
import ListeProduit from './ListeProduit';

const Container = () => {
  const [tabProduit, setTabProduit] = useState([]);
  const getProduitFromChild = (produit) => {
    const newArray = [...tabProduit, produit];
    setTabProduit(newArray);
  };
  return (
    <div className=" bg-slate-300 w-1/2 block m-auto">
      <Form updateTab={getProduitFromChild} />
      <ListeProduit tabProduit={tabProduit} />
    </div>
  );
};

export default Container;
