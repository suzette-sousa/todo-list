import React from 'react';

class Tasks extends React.Component {
  switchStyleFinished = () => {
    return {
      textDecoration: this.props.list.finished ? 'line-through' : false,
    }
  }
  render() {
    return (
      <div className="checkbox-ctn">
        <input 
        id={`todo-${this.props.list.id}`} 
        className="checkbox" 
        type="checkbox" 
        onChange={this.props.onComplete.bind(this, this.props.list.id)} 
        checked={this.props.list.finished ? 'checked': false} />
        <label 
        htmlFor={`todo-${this.props.list.id}`} 
        style={this.switchStyleFinished()} className="checkbox-label">
        {this.props.list.title}</label>
        <button 
        onClick={this.props.delTask.bind(this, this.props.list.id)} 
        className="btn-delitem"><span className="ico-close"></span></button>
      </div>
    )
  }
}

export default Tasks;
