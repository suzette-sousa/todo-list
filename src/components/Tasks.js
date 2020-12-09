import React from 'react';

class Tasks extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.list.title}</h2>
      </div>
    )
  }
}

export default Tasks;
