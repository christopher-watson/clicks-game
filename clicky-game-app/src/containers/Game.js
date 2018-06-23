import React, { Component } from "react";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import GameCards from "../components/GameCards";

// Import UI components
import { Grid } from "semantic-ui-react";

import teamData from "../data/teams";

class Game extends Component {
  state = {
    teamData: teamData,
    score: 0,
    topScore: 0
  }

  // when component mounts shuffle cards
  componentDidMount() {
    this.setState({
      teamData: this.shuffleTeams(this.state.teamData)
    })
  }
  
  // shuffle Team list and return new array
  shuffleTeams = teamData => {
    const shuffledTeamsList = teamData.sort(() => (0.5 - Math.random()));
    return shuffledTeamsList;
  }

  // when image is clicked, pass it's id through and check to see if it's been clicked before
  handleCardClick = id => {
    // set flag of correct guess status
    let guessedCorrectly = false;
    const newTeamList = this.state.teamData.map(team => {

      // if id passed in is equal to team[i].id
      if (team.id === id) {
        // if that team's clicked state is false, then let's make it a correct guess
        if (!team.clicked) {
          team.clicked = true;
          guessedCorrectly = true;
        } 
      }
      return team;

    });

    // if guessedCorrectly was set to `true` then run handleCorrectGuess
    (guessedCorrectly) 
      ? 
    this.handleCorrectGuess(newTeamList) 
      : 
    this.handleIncorrectGuess(newTeamList)

  }

  handleCorrectGuess = newTeamList => {
    // destructure score and topScore out of state
    const {score, topScore} = this.state;

    // create a new score based on the current score + 1
    const newScore = score + 1;

    // if newScore is greater than the current topScore, newScore is the new topScore
    const newTopScore = (newScore > topScore) ? newScore : topScore;

    this.setState({
      teamData: this.shuffleTeams(newTeamList),
      topScore: newTopScore,
      score: newScore
    });
  }

  // reset game
  handleIncorrectGuess = newTeamList => {
    // reset all Teams to have a `clicked` property of `false`
    const resetTeamList = newTeamList.map(team => {
      team.clicked = false;
      return team;
    })

    this.setState({
      teamData: this.shuffleTeams(resetTeamList),
      score: 0
    });
  }

  render() {
    return (
      <Grid centered padded>
        <TopBar score={this.state.score} topScore={this.state.topScore}/>
        <Hero/>
        <GameCards score={this.state.score} teamData={this.state.teamData} handleCardClick={this.handleCardClick}/>
      </Grid>
    )
  }
}

export default Game;