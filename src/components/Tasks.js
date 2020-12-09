import React from 'react';

class Tasks extends React.Component {
  myStyle = () => {
    return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5rem',
      borderBottom: '1px solid #000',
      backgroundColor: this.props.list.finished ? '#ccc' : '#4fccdc', 
      textDecoration: this.props.list.finished ? 'line-through' : 'none',
      color: this.props.list.finished ? '#999' : '#000'
    }
  }
  render() {
    return (
      <div style={this.myStyle()}>
        <h2>{this.props.list.title}</h2>
        <input type="checkbox" onchange={this.props.onComplete} />
      </div>
    )
  }
}

export default Tasks;
