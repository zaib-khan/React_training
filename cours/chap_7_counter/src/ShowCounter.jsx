import { Component } from 'react/cjs/react.development';

class ShowCounter extends Component {
  render() {
    const { count } = this.props; // this.props récupère les arguemnts recus dans le component, Ici on vient le destructurer
    return (
      <h1 className=" p-2 m-4 text-4xl font-bold text-blue-600 text-center">{count}</h1>
    );
  }
}

export default ShowCounter;
