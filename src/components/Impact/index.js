import React from 'react';
import css from './Impact.module.css';

// source for tree co2 absorption: http://urbanforestrynetwork.org/benefits/air%20quality.htm
function Impact({ count }) {
  return (
    <div className={css.impact}>
      <p id="tree-count">
        {count} trees have been planted in the West Midlands Virtual Forest so
        far.
      </p>
      <p>These absorb approximately {5.8967 * count} kg of CO2 per year.</p>
    </div>
  );
}

export default Impact;
