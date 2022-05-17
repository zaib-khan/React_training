// 1) Lorrsque on cree un coponent et que celui ci comporte uniquement un code HTML, on ecrit le component comme le cas 2 et 3

// 2) On ne mettra pas de parenthèse lorqu'on ecrit que de l'HTML quand le code est court

// 3) On mettra des parenthèses lorqu'on a un code long

// 4) Lorsque notre component contient du code JS, il faut mettre des accolades {} et faire un return de notre HTML (Et on ajoute des parenthèse si le code est long ) comme la cas 1

// 5) toujours retourner du JSX avec un element parent et unique qui contient plusieurs element ou un element comme dans le cas 4

// cas 1
export const MonsterGreen = () => {
  const color = 'Geen';
  return <div>Le monstre est {color}</div>;
};

// cas 2
export const MonsterDrink = () => <div>le mon stre est cool</div>;

// cas 3
export const MonsterLagwe = () => (
  <div>
    <h1>oui le monstre Lagwe</h1>
    <p>il est le descendant des romains</p>
  </div>
);

// cas 4

export const Monsterlustre = () => (
  <>
    <div>lolita</div>
    <div>Bus</div>
  </>
  // On utilise un fragment (<></>) pour éviter de mettre une div inutile
);
