const Submitbutton = ({ onHandleClick }) => (
  <button
    type="button"
    onClick={onHandleClick}
    className=" py-4 py-1.5 bg-cyan-300 duration-200 hover:bg-cyan-600">
    Launch the rocket
  </button>
);

export default Submitbutton;
