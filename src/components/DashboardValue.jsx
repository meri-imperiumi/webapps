import React from 'react';
import PropTypes from 'prop-types';
import Qty from 'js-quantities';
import styles from './DashboardValue.module.css';
import DashboardIndicator from './DashboardIndicator';

function DashboardValue(props) {
  const { label, value, maxValue } = props;
  let { desiredUnit } = props;
  let displayValue = value;
  if (typeof displayValue === 'number') {
    if (props.unit && desiredUnit) {
      const qty = Qty(value, props.unit);
      displayValue = qty
        .to(props.desiredUnit)
        .toPrec(`0.1 ${desiredUnit}`)
        .scalar;
    }
  } else {
    displayValue = 'n/a';
  }

  if (desiredUnit === 'temp-C') {
    desiredUnit = '°C';
  }

  let meter;
  if (typeof maxValue === 'number') {
    meter = (
      <aside className={styles.meter}>
        <DashboardIndicator
          value={value}
          maxValue={maxValue}
          radius={70}
        />
      </aside>
    );
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.label}>{label}</h1>
      {meter}
      <p className={styles.value}>{displayValue}</p>
      <h2 className={styles.unit}>{desiredUnit}</h2>
    </div>
  );
}

DashboardValue.defaultProps = {
  value: null,
  maxValue: null,
};
DashboardValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  maxValue: PropTypes.number,
  unit: PropTypes.string.isRequired,
  desiredUnit: PropTypes.string.isRequired,
};

export default DashboardValue;
