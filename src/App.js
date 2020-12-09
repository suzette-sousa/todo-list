import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Task 1',
        finished: false
      },
      {
        id: 2,
        title: 'Task 2',
        finished: false
      },
      {
        id: 3,
        title: 'Task 3',
        finished: false
      },
    ]
  }
  render () {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
