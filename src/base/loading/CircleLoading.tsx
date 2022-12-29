import React from 'react';
import styles from './circleLoading.scss';
interface Props {
  border: number;
  width: number;
  color?: ('gray4Color' | 'gray10Color')[];
}
function CircleLoading({ border, width, color }: Props) {
  return (
    <div
      className={` ${styles[`circle-loading`]}`}
      style={{
        width,
        height: width,
        borderWidth: border,
        borderTopColor: color && styles[color[0]],
        borderBottomColor: color && styles[color[1]],
        borderLeftColor: color && styles[color[1]],
        borderRightColor: color && styles[color[1]]
      }}
    />
  );
}

export default CircleLoading;

CircleLoading.defaultProp = {
  border: 2,
  width: 20,
  color: []
};
