class GamePresenter {
  constructor(view) {
    this.view = view;
  }

  clickToAnswer(itemClicked, correctAnswer) {
    this.checkEndGame();
    this.checkAnswer(itemClicked, correctAnswer);
  }

  checkAnswer(itemClicked, correctAnswer) {
    if (itemClicked === correctAnswer) {
      this.view.onCorrectAnswer();

      this.view.onNewQuestion();
    } else {
      this.view.onErrorAnwser();
    }
  }

  checkEndGame() {
    let num = this.view.state.questionsNum + 1;
    if (num >= this.view.state.questions.length) {
      this.view.onGameEnd();
    }
  }
}

export default GamePresenter;
