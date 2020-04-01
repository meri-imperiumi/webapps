import React from 'react';
import { mount } from 'enzyme';
import DashboardValue from './DashboardValue';

test('Converts speed correctly', () => {
  const value = mount(<DashboardValue label="SOG" value={3.3} unit="m/s" desiredUnit="kt" />);
  expect(value.find('p').text()).toEqual('6.4');
});

test('Displays Celsius in a prettified way', () => {
  const value = mount(<DashboardValue label="TEMP" value={295.15} unit="temp-K" desiredUnit="temp-C" />);
  expect(value.find('p').text()).toEqual('22');
  expect(value.find('h2').text()).toEqual('°C');
});
