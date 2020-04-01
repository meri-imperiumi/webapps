import React from 'react';
import PropTypes from 'prop-types';
import Qty from 'js-quantities';
import styles from './DashboardValue.module.css';

function DashboardValue(props) {
  let value = props.value;
  if (typeof props.value === 'number') {
    if (props.unit && props.desiredUnit) {
      const qty = Qty(props.value, props.unit)
      value = qty
        .to(props.desiredUnit)
        .toPrec(`0.1 ${props.desiredUnit}`)
        .scalar;
    }
  } else {
    value = 'n/a';
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.label}>{props.label}</h1>
      <p className={styles.value}>{value}</p>
      <h2 className={styles.unit}>{props.desiredUnit}</h2>
    </div>
  );
};

DashboardValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  unit: PropTypes.string,
  desiredUnit: PropTypes.string,
};

export default DashboardValue;
