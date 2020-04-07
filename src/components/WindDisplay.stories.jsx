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

export const WithApparentWind = () => (
  <WindDisplay
    bearing={number('Bearing', 45)}
    apparentWind={number('Apparent wind angle', 70)}
  />
);

export const WithApparentWindAndSpeed = () => (
  <WindDisplay
    bearing={number('Bearing', 45)}
    apparentWind={number('Apparent wind angle', 70)}
    windSpeed={number('Wind speed', 7)}
  />
);

export const WithApparentWindAndSpeedAndWaypoint = () => (
  <WindDisplay
    bearing={number('Bearing', 45)}
    apparentWind={number('Apparent wind angle', 45)}
    windSpeed={number('Wind speed', 7)}
    nextWaypoint={number('Next waypoint', 85)}
  />
);

export const WithOnlyWaypoint = () => (
  <WindDisplay
    bearing={number('Bearing', 45)}
    nextWaypoint={number('Next waypoint', 270)}
  />
);

export const WithWindNotSailing = () => (
  <WindDisplay
    bearing={number('Bearing', 45)}
    apparentWind={number('Apparent wind angle', 0)}
    windSpeed={number('Wind speed', 3)}
    beatAngle={0}
    gybeAngle={0}
  />
);

export const WithWindAndWaypointNotSailing = () => (
  <WindDisplay
    bearing={number('Bearing', 45)}
    nextWaypoint={number('Next waypoint', 270)}
    apparentWind={number('Apparent wind angle', 0)}
    windSpeed={number('Wind speed', 3)}
    beatAngle={0}
    gybeAngle={0}
  />
);
