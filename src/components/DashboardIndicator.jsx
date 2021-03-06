import React from 'react';
import PropTypes from 'prop-types';
import styles from './DashboardIndicator.module.css';

function DashboardIndicator(props) {
  const { radius, value, maxValue } = props;
  const circumference = 2 * Math.PI * radius;
  let meterPosition = (value / maxValue) * 0.8;
  if (meterPosition > 0.8) {
    meterPosition = 0.8;
  }
  if (meterPosition < 0) {
    meterPosition = 0;
  }
  return (
    <svg width={radius * 2 + 10} height={radius * 2 + 10}>
      <circle
        className={styles.indicator}
        cx={radius + 5}
        cy={radius + 5}
        r={radius}
        stroke="#e0e0e0"
        strokeWidth={10}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - (0.8 * circumference)}
        transform={`rotate(125 ${radius + 5} ${radius + 5})`}
        fill="transparent"
      />
      <circle
        className={styles.value}
        cx={radius + 5}
        cy={radius + 5}
        r={radius}
        stroke="blue"
        strokeWidth={10}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - (meterPosition * circumference)}
        transform={`rotate(125 ${radius + 5} ${radius + 5})`}
        fill="transparent"
      />
    </svg>
  );
}

DashboardIndicator.defaultProps = {
  radius: 100,
};

DashboardIndicator.propTypes = {
  radius: PropTypes.number,
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default DashboardIndicator;
