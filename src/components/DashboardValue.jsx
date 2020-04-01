import React from 'react';
import PropTypes from 'prop-types';
import Qty from 'js-quantities';
import styles from './DashboardValue.module.css';

function DashboardValue(props) {
  const { label } = props;
  let { value, desiredUnit } = props;
  if (typeof value === 'number') {
    if (props.unit && desiredUnit) {
      const qty = Qty(props.value, props.unit);
      value = qty
        .to(props.desiredUnit)
        .toPrec(`0.1 ${desiredUnit}`)
        .scalar;
    }
  } else {
    value = 'n/a';
  }

  if (desiredUnit === 'temp-C') {
    desiredUnit = '°C';
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.label}>{label}</h1>
      <p className={styles.value}>{value}</p>
      <h2 className={styles.unit}>{desiredUnit}</h2>
    </div>
  );
}

DashboardValue.defaultProps = {
  value: null,
};
DashboardValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  unit: PropTypes.string.isRequired,
  desiredUnit: PropTypes.string.isRequired,
};

export default DashboardValue;
