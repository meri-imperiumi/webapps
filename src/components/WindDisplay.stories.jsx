import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import WindDisplay from './WindDisplay';

export default {
  title: 'Wind Display',
  component: WindDisplay,
  decorators: [withKnobs],
};

export const WithoutValues = () => (
  <WindDisplay
    bearing={number('Bearing', 45)}
  />
);
