import React, { Component } from "react";
import SimpleAppBar from "./components/SimpleAppBar";
import Header from "./components/Header";
import Game from "./components/Game";

// import View from "./login-view";
// import Presenter from "./login-presenter";
// import { ConnectComponent } from "../../util";

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
        <Game
          onCorrectAnswer={this.onCorrectAnswer}
          onRespondAnswer={this.onRespondAnswer}
        />
      </div>
    );
  }
}

export default GameRoot;
