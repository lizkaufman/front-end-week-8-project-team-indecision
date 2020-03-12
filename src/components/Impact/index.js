import React, { useEffect } from 'react';
import css from './Impact.module.css';

// source for tree co2 absorption: http://urbanforestrynetwork.org/benefits/air%20quality.htm
function Impact({ count }) {
  return (
    <div className={css.impact}>
      <p id="tree-count">
        <span className={css.treeCount}>{count}</span> trees have been planted in the West Midlands Virtual Forest so
        far.
      </p>
      <p>These absorb approximately <span className={css.emissionCount}>{5.8967 * count}</span> kg of CO2 per year.</p>

    </div>
  );
}
export default Impact;
