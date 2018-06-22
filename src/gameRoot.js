import React, { Component } from "react";
import SimpleAppBar from "./components/SimpleAppBar";
import Header from "./components/Header";
//import Game from "./components/Game";
import Game from "./components/Game-view";
// import GameView from "./components/Game-view";
// import GramePresenter from "./components/Game-presenter";
// import { ConnectComponent } from "./utils/connect-component";

class GameRoot extends Component {
  state = {
    score: 0,
    totalQuestions: 0
  };

  changeScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  };

  onCorrectAnswer = () => {
    this.setState({
      score: this.state.score + 1
    });
  };

  onRespondAnswer = () => {
    this.setState({
      totalQuestions: this.state.totalQuestions + 1
    });
  };

  render() {
    const { score, totalQuestions } = this.state;
    return (
      <div>
        <Header />
        <SimpleAppBar
          playerName={this.props.match.params.nickname}
          score={score}
          totalQuestions={totalQuestions}
        />
        <br />
        <br />
        <Game
          onCorrectAnswer={this.onCorrectAnswer}
          onRespondAnswer={this.onRespondAnswer}
        />
      </div>
    );
  }
}

export default GameRoot;
