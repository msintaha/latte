import React from 'react';
import { mount } from 'enzyme';
import Home from './index';
import Service from '../../services/Service';
import * as should from 'should';

describe("Home", () => {
  let sandbox, wrapper;
  beforeEach(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(Service, 'list').resolves([
      'apple',
      'oranges'
    ])
  })

  afterEach(() => {
    sandbox.restore();
    wrapper && wrapper.unmount();
  })

  function render() {
    wrapper = mount(<Home />);
  }

  it("should render Home component", () => {
    render()
    expect(wrapper.find('.home').text()).to.contain('Latte');
  });

  it("should call Service list", () => {
    render()

    wrapper.update();
    Service.list.should.have.been.called;
  });
});