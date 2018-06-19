import React, { Component } from 'react';
import TeamCard from './components/TeamCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import teams from './teams.json'; 
import './App.css';

class App extends Component {

  state = {
    teams
  }

  //function to add clicked team to state
  clickedTeam = id => {
    const teams = this.state.teams;

    this.setState({teams});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Don't Drop The Rock</h1>
        </header>
      </div>
    );
  }
}

export default App;
