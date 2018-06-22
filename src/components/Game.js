import React, { Component } from "react";
import GameRepository from "./../repository/Game.repository";
import GameButtonView from "./GameButtonView";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import EndGame from "./gameHelperEndGame";
import ErrorAnswer from "./gameHelperErrorAnswer";
import Question from "./gameHelperQuestion";

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

  clickToAnswer = (item, correctAnswer) => {
    let num = this.state.questionsNum + 1;
    if (num >= this.state.questions.length) {
      this.setState({
        endGame: true
      });
    }
    if (item === correctAnswer) {
      this.props.onCorrectAnswer();
      this.newQuestion();
    } else {
      this.setState({ errorAnswer: true });
    }
    this.props.onRespondAnswer();
  };

  newQuestion = () => {
    this.setState({
      questionsNum: this.state.questionsNum + 1,
      errorAnswer: false
    });
  };

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  render() {
    if (this.state.endGame) {
      return <EndGame />;
    }

    if (this.state.questions.length > 0 && this.state.errorAnswer === false) {
      let respuestas = this.shuffle(
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
                      this.clickToAnswer(
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
    } else {
      if (this.state.errorAnswer === true) {
        return (
          <div>
            <ErrorAnswer />
            <GameButtonView onClick={this.newQuestion} text="Nueva pregunta" />
          </div>
        );
      }
      return null;
    }
  }
}

export default Game;
