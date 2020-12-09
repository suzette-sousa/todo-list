import React from 'react';
import Tasks from './Tasks';

class Todos extends React.Component {
  render() {
    return this.props.todos.map((list) => (
      <Tasks />
    ))
  }
}

export default Todos;
