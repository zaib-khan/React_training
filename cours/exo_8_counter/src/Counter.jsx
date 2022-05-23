import { Component } from 'react/cjs/react.development';

class Counter extends Component {
  render() {
    const { count, onUpdate } = this.props;
    return (
      <div className="flex justify-center pt-5">
        <button
          type="button"
          className=" p-4 mr-4 text-white bg-red-500 disabled:bg-red-300"
          onClick={() => onUpdate(-1)}
          disabled={count <= 0}>
          -1
        </button>
        <button
          type="button"
          className=" p-4 mr-4 text-white bg-green-500"
          onClick={() => onUpdate(1)}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
