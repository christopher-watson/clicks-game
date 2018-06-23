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
      <Wrapper>
        <Title>Don't Drop the Rock!</Title>
        {this.state.teams.map(team => (
          <TeamCard
            id={team.id}
            key={team.id}
            name={team.name}
            image={team.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
