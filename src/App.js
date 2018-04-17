import React from 'react';
import Container from './components/Container'
import { Route } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path ='/' component= { Container } />
      </div>
    );
  }
}

export default App;

