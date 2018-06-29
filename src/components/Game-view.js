import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import GameRepository from "../repository/local.repository";
import GameButtonView from "./atomos/GameButtonView";

import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";

import EndGame from "./game-helpers/gameHelperEndGame";
import ErrorAnswer from "./game-helpers/gameHelperErrorAnswer";
import Question from "./game-helpers/gameHelperQuestion";
import GamePresenter from "./Game-presenter";

class Game extends Component {
  constructor() {
    super();
    this.repository = new GameRepository();
  }
  state = {
    questions: [],
    questionsNum: 0,
    errorAnswer: false,
    endGame: false
  };

  componentDidMount() {
    this.repository
      .getQuestions()
      .then(questions => this.onLoadQuestions(questions));
  }

  onLoadQuestions = questions => {
    this.setState({ questions: this.repository.model(questions) });
  };

  onGameEnd = () => {
    this.setState({ endGame: true });
  };

  onErrorAnwser = () => {
    this.setState({ errorAnswer: true });
  };

  onCorrectAnswer = () => {
    this.props.onCorrectAnswer();
  };

  onNewQuestion = () => {
    this.props.onRespondAnswer();
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
