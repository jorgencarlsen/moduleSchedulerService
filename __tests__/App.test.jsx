import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';
// /home/arundask92/Desktop/2. Hack Reactor/01. Immersive/HRSF130-FEC/moduleSchedulerService/client/src/components/App1.jsx

test('has app', () => {
  const wrapper = shallow(<App />);
  const div = wrapper.find('div');
  expect(div.text()).toBe("Realia1");
})