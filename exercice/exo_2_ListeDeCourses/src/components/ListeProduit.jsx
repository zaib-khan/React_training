import Produit from './Produit';

const ListeProduit = ({ tabProduit }) =>
  tabProduit.map((x, i) => <Produit key={i} ProduitName={x} />);

export default ListeProduit;
