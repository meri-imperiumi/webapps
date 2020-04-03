import React from 'react';
import PropTypes from 'prop-types';

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
  const { bearing } = props;
  const rotation = 90 + bearing;
  let currentOffset = 0;
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
        fillOpacity={0.8}
      />
      {
        compassPoints.map((point) => {
          const offset = `${Math.floor(currentOffset)}%`;
          currentOffset += 12.5;
          return (
            <text
              x={0}
              y={15}
              stroke="black"
              textAnchor="middle"
            >
              <textPath xlinkHref="#compassCircle" startOffset={offset}>
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
};

export default WindDisplay;
