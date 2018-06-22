import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GameContainer from "./../GameContainer";

describe("Game", () => {
  test("has a valid snapshot", () => {
    configure({ adapter: new Adapter() });

    const wrapper = shallow(<GameContainer />);
    const p = wrapper.find(".MuiTypography-root-1");
    expect(p.text()).toBe("Buy Milk");
  });
});
