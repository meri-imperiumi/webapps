import React from 'react';
import PropTypes from 'prop-types';
import WindDisplayAreas from './WindDisplayAreas';
import DashboardValue from './DashboardValue';
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
  const {
    bearing,
    apparentWind,
    nextWaypoint,
    windSpeed,
    beatAngle,
    gybeAngle,
  } = props;
  const rotation = 90 + bearing;
  const waypointRotation = -90 + nextWaypoint - bearing;
  let currentOffset = 0;
  let windAreas = null;
  if (typeof apparentWind === 'number') {
    windAreas = (
      <WindDisplayAreas
        apparentWind={apparentWind}
        radius={radius}
        beatAngle={beatAngle}
        gybeAngle={gybeAngle}
      />
    );
  }
  let waypoint = null;
  if (typeof nextWaypoint === 'number') {
    waypoint = (
      <polyline
        points={`${radius + radius + 10 + 10}, ${radius + 10} ${radius + radius + 14}, ${radius} ${radius + 14 + radius}, ${radius + 21}`}
        fill="black"
        stroke="black"
        transform={`rotate(${waypointRotation} ${radius + 10} ${radius + 14})`}
      />
    );
  }
  return (
    <div className={styles.container}>
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
        {windAreas}
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
        {waypoint}
        <rect
          width={80}
          height={30}
          x={radius + 10 - 40}
          y={14}
          fill="white"
          stroke="black"
          strokeWidth={4}
        />
        <text
          x={radius + 10}
          y={38}
          stroke="black"
          textAnchor="middle"
          className={styles.currentBearing}
        >
          {`${bearing}`.padStart(3, 0)}
          &deg;
        </text>
      </svg>
      <div className={styles.windSpeed}>
        <DashboardValue
          label="Wind"
          value={windSpeed}
          unit="m/s"
          desiredUnit="kt"
        />
      </div>
    </div>
  );
}

WindDisplay.defaultProps = {
  apparentWind: null,
  nextWaypoint: 270,
  windSpeed: null,
  beatAngle: 42,
  gybeAngle: 27,
};

WindDisplay.propTypes = {
  bearing: PropTypes.number.isRequired,
  apparentWind: PropTypes.number,
  nextWaypoint: PropTypes.number,
  windSpeed: PropTypes.number,
  beatAngle: PropTypes.number,
  gybeAngle: PropTypes.number,
};

export default WindDisplay;
