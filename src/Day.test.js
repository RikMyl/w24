import React from "react";
import Month from "./Month";
import { configure, shallow, assert } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Day from "./Day";
configure({ adapter: new Adapter() });
describe('The business card data")', () => {
  it("There is one div", () => {
    const wrapper = shallow(<Day month="10" />);
    expect(wrapper.find("div")).toHaveLength(1);
  });
  it("There is one image", () => {
    const wrapper = shallow(<Day month="7" />);
    expect(wrapper.find("div").html()).toEqual(
      "<div>Month 7/2019 starts Monday</div>"
    );
  });
});