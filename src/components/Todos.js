import React from 'react';
import Tasks from './Tasks';

class Todos extends React.Component {
  render() {
    return this.props.todos.map((list) => (
      <Tasks key={list.id} list={list} onComplete={this.onComplete} />
    ))
  }
}

export default Todos;
