import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/functional/Header';

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
        finished: true
      },
      {
        id: 3,
        title: 'Task 3',
        finished: false
      },
    ]
  }

  onComplete = (id) => {
    this.setState ({
      todos: this.state.todos.map(
        list => {
          if(list.id === id) {
            list.finished = !list.finished;
          }
          return list;
        }
      )
    })
  }

  delTask = (id) => {
    this.setState ({
      todos: [...this.state.todos.filter(
        list => list.id !== id
      )]
    })
  }

  render () {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} onComplete={this.onComplete} delTask={this.delTask} />
      </div>
    );
  }
}

export default App;
