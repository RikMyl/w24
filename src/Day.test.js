import React from "react";
import Month from "./Month";
import { configure, shallow, assert } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Day from "./Day";
configure({ adapter: new Adapter() });
describe('Testing Day-component")', () => {
  it("There is one div", () => {
    const wrapper = shallow(<Day month="10" />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
  it("Test 7/2019", () => {
    const wrapper = shallow(<Day month="7" />);
    expect(wrapper.find("div").html()).toEqual(
      "<div>Month 7/2019 starts Monday</div>"
    );
  });
});
