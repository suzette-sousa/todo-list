import React from 'react';

class AddToList extends React.Component {
  state= {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToList(this.state.title);
    this.setState({
      title: ''
    });
  }

  onAdd = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  render () {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5rem'
      }}>
        <form onSubmit={this.onSubmit}>
          <input 
          type="text" 
          name="title" 
          placeholder="Une autre tâche ?" 
          value= {this.state.title}
          onChange={this.onAdd} />
          <input type="submit" value="Ajouter" />
        </form>
      </div>
    )
  }
}

export default AddToList;
