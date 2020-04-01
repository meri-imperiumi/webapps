import React from 'react';
import DashboardValue from './DashboardValue'

export default {
  title: 'Dashboard value',
  component: DashboardValue,
};
export const Basic = () => (
  <DashboardValue
    label="SOG"
    value={3.3}
    unit="m/s"
    desiredUnit="kt"
  />
);

export const WithoutValue = () => (
  <DashboardValue
    label="SOG"
    unit="m/s"
    desiredUnit="kt"
  />
);
