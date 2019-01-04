import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIdea } from '../../actions';

class IdeaForm extends Component {
  constructor(){
    super()
    this.state = {
      ideaTitle: '',
      ideaBody: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addIdea(this.state)
    this.setState({
      ideaTitle: '',
      ideaBody: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className='idea-form'>
        <input onChange={this.handleChange} value={this.state.ideaTitle} className='idea-title' name='ideaTitle' placeholder='Idea Title'/>
        <input onChange={this.handleChange} value={this.state.ideaBody} className='idea-body' name='ideaBody' placeholder='Info About Idea'/>
        <button>Add Idea</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addIdea: (idea) => dispatch(addIdea(idea))
})

export default connect(null, mapDispatchToProps)(IdeaForm);