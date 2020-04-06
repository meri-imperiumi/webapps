import React from 'react';
import PropTypes from 'prop-types';
import styles from './WindDisplay.module.css';

const compassPoints = [
  'N',
  'NE',
  'E',
  'SE',
  'S',
  'SW',
  'W',
  'NW',
];

function WindDisplay(props) {
  const radius = 300;
  const { bearing, apparentWind } = props;
  const rotation = 90 + bearing;
  let currentOffset = 0;
  const beatAngle = 42;
  const getCoordinatesForDegrees = (degrees) => {
    const angle = 2 * Math.PI * (degrees / 360);
    const x = (radius + 10) + (Math.cos(angle) * radius);
    const y = (radius + 14) + (Math.sin(angle) * radius);
    return [x, y];
  };
  const windRotation = -90 - beatAngle + apparentWind;
  return (
    <svg width={radius * 2 + 20} height={radius * 2 + 20}>
      <circle
        id="compassCircle"
        cx={radius + 10}
        cy={radius + 14}
        r={radius}
        stroke="black"
        strokeWidth={4}
        fill="#044B94"
        fillOpacity={0.2}
        transform={`rotate(-${rotation} ${radius + 10} ${radius + 14})`}
      />
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
        fillOpacity={0.6}
        transform={`rotate(${windRotation} ${radius + 10} ${radius + 14})`}
      />
      <path
        d="
          M 310 75
          C 410,350
            420,350
            360,500
          L 260 500
          C 210,350
            190,400
            310,75
        "
        stroke="white"
        fill="white"
      />
      {
        compassPoints.map((point) => {
          const offset = `${Math.floor(currentOffset)}%`;
          currentOffset += 12.5;
          return (
            <text
              key={point}
              x={0}
              y={15}
              stroke="black"
              textAnchor="middle"
            >
              <textPath
                xlinkHref="#compassCircle"
                startOffset={offset}
                className={styles.compassPoint}
              >
                {point}
              </textPath>
            </text>
          );
        })
      }
    </svg>
  );
}

WindDisplay.propTypes = {
  bearing: PropTypes.number.isRequired,
  apparentWind: PropTypes.number.isRequired,
};

export default WindDisplay;
