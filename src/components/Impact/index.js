import React from 'react';
import css from './Impact.module.css';

// source for tree co2 absorption: http://urbanforestrynetwork.org/benefits/air%20quality.htm
function Impact({ count }) {
  return (
    <div className={css.impact}>
      <p id="tree-count">{count} Trees planted.</p>
      <p>Approx {5.8967 * count}kg CO2 absorbed per year.</p>
    </div>
  );
}

export default Impact;
