import React from 'react';
import { mount } from 'enzyme';
import Home from './index';
import { expect } from 'chai';

describe("Home", () => {
  it("should render my component", () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find('.home').text()).to.contain('Latte');
  });
});