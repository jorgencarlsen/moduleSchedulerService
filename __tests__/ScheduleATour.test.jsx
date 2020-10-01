import React from 'react';
import { shallow } from 'enzyme';
import ScheduleATour from '../client/src/components/Schedule/ScheduleATour.jsx';

describe('ScheduleATour Test Suite', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<ScheduleATour />);
    expect(wrapper.exists()).toBe(true);
  });


});

