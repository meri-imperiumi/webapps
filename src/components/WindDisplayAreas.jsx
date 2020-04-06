import React from 'react';
import PropTypes from 'prop-types';

function WindDisplayAreas(props) {
  const {
    apparentWind,
    beatAngle,
    gybeAngle,
    radius,
  } = props;
  const getCoordinatesForDegrees = (degrees) => {
    const angle = 2 * Math.PI * (degrees / 360);
    const x = (radius + 10) + (Math.cos(angle) * radius);
    const y = (radius + 14) + (Math.sin(angle) * radius);
    return [x, y];
  };
  const windRotation = -90 - 1 + apparentWind;
  const beatRotation = -90 - beatAngle + apparentWind;
  const gybeRotation = -90 - gybeAngle + apparentWind + 180;
  return (
    <g>
      <path
        d={`
          M ${radius + 10} ${radius + 14}
          L ${radius + 10 + radius} ${radius + 14}
          A ${radius} ${radius} 0 0 1 ${getCoordinatesForDegrees(beatAngle * 2)[0]} ${getCoordinatesForDegrees(beatAngle * 2)[1]}
          Z
        `}
        stroke="red"
        strokeWidth={0}
        fill="red"
        fillOpacity={0.4}
        transform={`rotate(${beatRotation} ${radius + 10} ${radius + 14})`}
      />
      <path
        d={`
          M ${radius + 10} ${radius + 14}
          L ${radius + 10 + radius} ${radius + 14}
          A ${radius} ${radius} 0 0 1 ${getCoordinatesForDegrees(gybeAngle * 2)[0]} ${getCoordinatesForDegrees(gybeAngle * 2)[1]}
          Z
        `}
        stroke="red"
        strokeWidth={0}
        fill="red"
        fillOpacity={0.2}
        transform={`rotate(${gybeRotation} ${radius + 10} ${radius + 14})`}
      />
      <path
        d={`
          M ${radius + 10} ${radius + 14}
          L ${radius + 10 + radius} ${radius + 14}
          A ${radius} ${radius} 0 0 1 ${getCoordinatesForDegrees(1 * 2)[0]} ${getCoordinatesForDegrees(1 * 2)[1]}
          Z
        `}
        stroke="red"
        strokeWidth={0}
        fill="red"
        fillOpacity={0.4}
        transform={`rotate(${windRotation} ${radius + 10} ${radius + 14})`}
      />
    </g>
  );
}

WindDisplayAreas.defaultProps = {
  // Note: these should be read from polars
  beatAngle: 42,
  gybeAngle: 27,
};

WindDisplayAreas.propTypes = {
  apparentWind: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  beatAngle: PropTypes.number,
  gybeAngle: PropTypes.number,
};

export default WindDisplayAreas;
