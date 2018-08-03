import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import spy from 'sinon'
import Logo from '../src/components/logo'

spy(Logo.prototype, 'componentDidMount');

describe('Logo component', () => {
  it('should render the component by calling componentDidMount', () => {
    const wrapper = mount(<Logo />);
    expect(Logo.prototype.componentDidMount.calledOnce).toEqual(true);
  });
});