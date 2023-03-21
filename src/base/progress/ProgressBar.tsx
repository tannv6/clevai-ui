import React from 'react';
import { COLOR_ARRAY } from '..';
import colors from '../css/colors.scss';
import progressStyles from './progress.scss';

type Props = {
  data?: { val: number };
  bg?: typeof COLOR_ARRAY[number];
};
function ProgressBar({ data = { val: 50 }, bg = 'orange6' }: Props) {
  const value = data?.val <= 100 ? data?.val : 100;
  return (
    <div className={`${progressStyles.progress}`}>
      <div className={`${progressStyles.wrapper}`}>
        <div
          className={`${progressStyles['progress-completed']}`}
          style={{
            width: `${value}%`,
            background: colors[bg]
          }}
        />
      </div>
      <div
        style={{
          left: `calc(${value}% - 23px)`
        }}
        className={`${progressStyles.number}`}
      >
        {value}%
      </div>
    </div>
  );
}

export default ProgressBar;
