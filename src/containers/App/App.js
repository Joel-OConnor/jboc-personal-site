import React, { Component } from 'react';
import IdeaForm from '../IdeaForm/IdeaForm';
import IdeaContainer from '../IdeaContainer/IdeaContainer';
import { HeaderBar } from '../../components/HeaderBar/HeaderBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <h1 className='my-name-header'>Joel OConnor</h1>
        <h1 className='title-1'>Title 1</h1>
        <h1 className='title-2'>Title 2</h1>
        <h1 className='title-3'>Title 3</h1>
        <button className='button-1'>Contact Me</button>
        {/* <IdeaForm /> */}
        {/* <IdeaContainer /> */}
      </div>
    );
  }
}

export default App;
