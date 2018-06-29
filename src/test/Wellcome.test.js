import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Wellcome from "./../wellcome";
import { MemoryRouter } from "react-router";

import Header from "./../components/Header";
import FormPlayer from "./../components/FormPlayer";

Enzyme.configure({ adapter: new Adapter() });

describe("Game", () => {
  it("renders wellcome router without crashing", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Wellcome />
      </MemoryRouter>
    );
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(FormPlayer)).toHaveLength(1);
  });
});
