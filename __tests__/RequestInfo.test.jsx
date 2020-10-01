import React from 'react';
import { shallow } from 'enzyme';
import RequestInfo from '../client/src/components/Request/RequestInfo.jsx';

describe('RequestInfo Test Suite', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<RequestInfo />);
    expect(wrapper.exists()).toBe(true);
  });


});

