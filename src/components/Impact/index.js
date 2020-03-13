import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import css from './Impact.module.css';

// source for tree co2 absorption: http://urbanforestrynetwork.org/benefits/air%20quality.htm
function Impact({ count }) {
  const [isWiggling, setIsWiggling] = useState(false);

  useEffect(() => {
    setIsWiggling(true);
  }, [count]);

  return (
    <div className={css.impact}>
      <p id="tree-count">
        <span
          className={cn(css.treeCount, { [css.animate]: isWiggling })}
          onAnimationEnd={() => setIsWiggling(false)}
        >
          {count}
        </span>{' '}
        trees have been planted in the West Midlands Virtual Forest so far.
      </p>
      <p>
        These absorb approximately{' '}
        <div
          className={
            css.jelloHorizontal + ' ' + (isWiggling ? css.animate : '')
          }
        >
          {Math.floor(5.8967 * count)}
        </div>{' '}
        kg of CO2 per year.
      </p>
    </div>
  );
}
export default Impact;
