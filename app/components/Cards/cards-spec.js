// components/Cards/Header.spec.js

import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import Cards from "./Cards";


describe("<Cards/>", () => {
  it("should display four cards", () => {
    const wrapper = shallow(<Cards />);
    expect(wrapper.find("div")).to.have.length(4);
  });

});
