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
  let currentOffset = (((bearing) / 3.6) * -1) + 0.5;
  return (
    <svg width={radius * 2 + 20} height={radius * 2 + 20}>
      <circle
        id="compassCircle"
        cx={-1 * radius - 10}
        cy={radius + 10}
        r={radius}
        stroke="black"
        strokeWidth={4}
        fill="#044B94"
        fillOpacity={0.2}
        transform="rotate(-90)"
      />
      <path
        d="
          M 310 60
          C 410,350
            420,350
            360,500
          L 260 500
          C 210,350
            190,400
            310,60
        "
        stroke="white"
        fill="white"
        fillOpacity={0.8}
      />
      {
        compassPoints.map((point) => {
          let calcOffset = currentOffset;
          if (currentOffset < 0) {
            calcOffset += 100;
          }
          if (calcOffset > 100) {
            calcOffset -= 100;
          }
          // FIXME: The text in point 0% gets clipped. Draw outside?
          const offset = `${Math.floor(calcOffset)}%`;
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
