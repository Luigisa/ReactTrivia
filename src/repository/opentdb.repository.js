function convert(str) {
  str = str.replace(/&amp;/g, "&");
  str = str.replace(/&quot;/g, '"');
  str = str.replace(/&#039;/g, "'");
  return str;
}
class LocalRepository {
  getQuestions() {
    return fetch(
      "https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple"
    ).then(res => res.json());
  }

  model(questions) {
    const modelQuestions = [];
    questions.results.forEach(element => {
      const answers = element.incorrect_answers.concat(element.correct_answer);
      const answersConvert = [];
      answers.forEach(element => {
        answersConvert.push(convert(element));
      });

      modelQuestions.push({
        question: convert(element.question),
        answers: answersConvert,
        correctAnswer: element.correct_answer
      });
    });

    return modelQuestions;
  }
}

export default LocalRepository;
