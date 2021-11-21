import React from "react";
import Month from "./Month";
import { configure, shallow, assert } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Day from "./Day";
configure({ adapter: new Adapter() });
describe('The business card data")', () => {
  it("Returns one Day component", () => {
    const wrapper = shallow(<Month month="10" />);
    expect(wrapper.find(Day)).toHaveLength(1);
  });
  it("Day component return correct weekday data", () => {
    const wrapper = shallow(<Day month="10" />);
    expect(wrapper.find("div").html()).toEqual(
      "<div>Month 10/2021 starts Friday</div>"
    );
  });
  it("Day component return correct weekday data", () => {
    const wrapper = shallow(<Day month="7" />);
    expect(wrapper.find("div").html()).toEqual(
      "<div>Month 7/2021 starts Thursday</div>"
    );
  });
  it("Day component return correct weekday data", () => {
    const wrapper = shallow(<Day month="12" />);
    expect(wrapper.find("div").html()).toEqual(
      "<div>Month 12/2021 starts Wednesday</div>"
    );
  });
});
