class LocalRepository {
  getQuestions() {
    return fetch("/questions.json").then(res => res.json());
  }

  model(questions) {
    return questions.questions;
  }
}

export default LocalRepository;
