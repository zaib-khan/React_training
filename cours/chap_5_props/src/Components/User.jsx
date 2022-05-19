const User = ({name,age,comment}) => (
  <div className="py-2 mx-4 mb-3 border-b">
    <h1 className="text-2xl font-bold">Hello {name}</h1>
    <h2>Ici on retrouve quelque chose {age} ans</h2>
    <p className="mt-2">Ici on retrouv autres chose  {comment}</p>
  </div>
);

export default User;
