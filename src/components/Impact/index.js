import React, { useEffect } from 'react';
import css from './Impact.module.css';

// source for tree co2 absorption: http://urbanforestrynetwork.org/benefits/air%20quality.htm
function Impact({ count }) {
  return (
    <div className={css.impact}>
      <p>
        <span className={css.treeCount}>{count}</span>Trees planted.
      </p>
      <p>
        Approx <span className={css.emissionCount}>{5.8967 * count}</span>kg CO2
        absorbed per year.
      </p>
    </div>
  );
}
export default Impact;
