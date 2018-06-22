import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import GameRepository from "./../repository/Game.repository";
import GameButtonView from "./GameButtonView";

import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";

import EndGame from "./gameHelperEndGame";
import ErrorAnswer from "./gameHelperErrorAnswer";
import Question from "./gameHelperQuestion";
import GamePresenter from "./Game-presenter";

class Game extends Component {
  state = {
    questions: [],
    questionsNum: 0,
    errorAnswer: false,
    endGame: false
  };

  componentDidMount() {
    GameRepository().then(questions =>
      this.setState({ questions: questions.questions })
    );
  }

  onGameEnd = () => {
    this.setState({ endGame: true });
  };

  onErrorAnwser = () => {
    this.setState({ errorAnswer: true });
  };

  onNewQuestion = () => {
    this.props.onCorrectAnswer();
    this.setState({
      questionsNum: this.state.questionsNum + 1,
      errorAnswer: false
    });
  };

  onNewGame = () => {
    this.props.history.push(`/`);
  };

  render() {
    const hasQuestions = this.state.questions.length > 0;
    this.presenter = new GamePresenter(this);

    if (this.state.endGame) {
      return (
        <div>
          <EndGame />
          <GameButtonView onClick={this.onNewGame} text="Nuevo Juego" />
        </div>
      );
    }

    if (this.state.errorAnswer === true) {
      return (
        <div>
          <ErrorAnswer />
          <GameButtonView onClick={this.onNewQuestion} text="Nueva pregunta" />
        </div>
      );
    }

    if (hasQuestions) {
      let respuestas = shuffle(
        this.state.questions[this.state.questionsNum].answers
      );

      let question = this.state.questions[this.state.questionsNum].question;
      return (
        <Grid container spacing={24} justify="center">
          <Grid item xs={12}>
            <Question question={question} />
          </Grid>

          {respuestas.map(item => {
            return (
              <Grid item xs={12} md={4} key={item}>
                <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                  <GameButtonView
                    onClick={() =>
                      this.presenter.clickToAnswer(
                        item,
                        this.state.questions[this.state.questionsNum]
                          .correctAnswer
                      )
                    }
                    text={item}
                  />
                </Slide>
              </Grid>
            );
          })}
        </Grid>
      );
    }

    return null;
  }
}

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export default withRouter(Game);
