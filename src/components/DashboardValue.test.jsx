import React from 'react';
import { mount } from 'enzyme';
import DashboardValue from './DashboardValue';

test('Converts speed correctly', () => {
  const value = mount(<DashboardValue label="SOG" value={3.3} unit="m/s" desiredUnit="kt" />);
  expect(value.find('p').text()).toEqual('6.4');
});
