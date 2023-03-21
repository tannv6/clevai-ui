import React from 'react';
import progressStyles from './progress.scss';
import colors from '../css/colors.scss';
import { COLOR_ARRAY } from '..';

type Props = {
  bg?: typeof COLOR_ARRAY[number];
  data: { max: number; val: number };
};
function ProgressDotedBar({ bg = 'orange6', data }: Props) {
  return (
    <div className={`${progressStyles.progress}`}>
      <div className={`${progressStyles.wrapper}`}>
        <div className={`${progressStyles.dots}`}>
          {Array(data?.max)
            .fill(1)
            .map((_e, i) => {
              return (
                <div
                  key={i}
                  className={`${progressStyles.dot}`}
                  style={{
                    backgroundColor:
                      i < (data?.val || 0) ? colors[bg] : 'transparent',
                    width: `calc(100% / ${data?.max || 1})`
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProgressDotedBar;
