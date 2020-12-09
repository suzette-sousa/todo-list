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
        <input type="checkbox" onChange={this.props.onComplete.bind(this, this.props.list.id)} />
        <h2>{this.props.list.title}</h2>
        <button onClick={this.props.delTask.bind(this, this.props.list.id)} style={{background: 'none', border: 'none', color: '#e91e63', padding: '0.5rem', marginLeft: 'auto', fontSize: '1.6rem'}}>X</button>
      </div>
    )
  }
}

export default Tasks;
