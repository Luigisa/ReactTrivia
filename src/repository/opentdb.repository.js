class LocalRepository {
  getQuestions() {
    return fetch(
      "https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple"
    ).then(res => res.json());
  }

  model(questions) {
    const modelQuestions = [];
    questions.results.forEach(element => {
      modelQuestions.push({
        question: element.question,
        answers: element.incorrect_answers.concat(element.correct_answer),
        correctAnswer: element.correct_answer
      });
    });

    return modelQuestions;
  }
}

export default LocalRepository;
