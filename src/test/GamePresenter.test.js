import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GamePresenter from "./../components/Game-presenter";

Enzyme.configure({ adapter: new Adapter() });

describe("Game Presenter", () => {
  it("Spy on view on correct awswer", () => {
    const view = new ViewSpy();

    const spyOnCheckEndGame = jest.spyOn(view, "onGameEnd");
    const spyOnCorrectAnwswer = jest.spyOn(view, "onCorrectAnswer");
    const spyOnNewQuestions = jest.spyOn(view, "onNewQuestion");

    const presenter = new GamePresenter(view);
    presenter.clickToAnswer("Respuesta", "Respuesta");

    expect(spyOnCheckEndGame).toHaveBeenCalled();
    expect(spyOnCorrectAnwswer).toHaveBeenCalled();
    expect(spyOnNewQuestions).toHaveBeenCalled();
  });

  it("Spy on view on wrong awswer", () => {
    const view = new ViewSpy();

    const spyOnErrorAnwser = jest.spyOn(view, "onErrorAnwser");

    const presenter = new GamePresenter(view);
    presenter.clickToAnswer("RespuestaIncorrecta", "Respuesta");

    expect(spyOnErrorAnwser).toHaveBeenCalled();
  });
});

class ViewSpy {
  state = {
    questions: [1],
    questionsNum: 1
  };
  onCorrectAnswer() {}
  onNewQuestion() {}
  onGameEnd() {}
  onErrorAnwser() {}
}
