const GameRepository = () => {
  return fetch("/questions.json").then(res => res.json());
  // return fetch(
  //   "https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple"
  // ).then(res => res.json());
};

export default GameRepository;
