import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import DashboardValue from './DashboardValue';

export default {
  title: 'Dashboard value',
  component: DashboardValue,
  decorators: [withKnobs],
};

const unitOptions = [
  {
    label: 'SOG',
    unit: 'm/s',
    desiredUnit: 'kt',
  },
  {
    label: 'Temp',
    unit: 'kelvin',
    desiredUnit: 'temp-C',
  },
  {
    label: 'Baro',
    unit: 'Pa',
    desiredUnit: 'hPa',
  },
];

export const Basic = () => {
  const units = select('Unit', unitOptions, unitOptions[0]);
  return (
    <DashboardValue
      label={units.label}
      value={number('Value', 3.3)}
      unit={units.unit}
      desiredUnit={units.desiredUnit}
    />
  );
};

export const WithoutValue = () => (
  <DashboardValue
    label="SOG"
    unit="m/s"
    desiredUnit="kt"
  />
);
