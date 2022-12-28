import React from 'react';
import styles from './tooltip.scss';
type Props = {
  children: React.ReactNode;
  tooltip: React.ReactNode;
  position:
    | ['top']
    | ['top', 'left']
    | ['top', 'right']
    | ['bottom']
    | ['bottom', 'left']
    | ['bottom', 'right']
    | ['left']
    | ['left', 'top']
    | ['left', 'bottom']
    | ['right']
    | ['right', 'top']
    | ['right', 'bottom'];
  type: 'primary' | 'secondary' | 'default';
};
function Tooltip({ children, tooltip, type, position }: Props) {
  const [position1, position2] = position;
  return (
    <div className={`${styles['tooltip-container']}`}>
      {children}
      <div
        className={`${styles.tooltip} ${styles[`tooltip-bg-${type}`]} ${
          position1 ? styles[`tooltip-position1-${position1}`] : ''
        } ${position2 ? styles[`tooltip-position2-${position2}`] : ''}`}
      >
        {tooltip}
      </div>
    </div>
  );
}

export default Tooltip;
