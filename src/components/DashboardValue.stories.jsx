import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import DashboardValue from './DashboardValue';
import '../../.storybook/helpers';

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
    unit: 'temp-K',
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

export const withMaxValue = () => {
  const units = select('Unit', unitOptions, unitOptions[0]);
  return (
    <DashboardValue
      label={units.label}
      value={number('Value', 3.3)}
      maxValue={number('Max value', 6)}
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

export const maxWithoutValue = () => (
  <DashboardValue
    label="SOG"
    maxValue={6}
    unit="m/s"
    desiredUnit="kt"
  />
);
