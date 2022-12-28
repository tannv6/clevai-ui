import React from 'react';
declare type Props = {
    children: React.ReactNode;
    tooltip: React.ReactNode;
    position: ['top'] | ['top', 'left'] | ['top', 'right'] | ['bottom'] | ['bottom', 'left'] | ['bottom', 'right'] | ['left'] | ['left', 'top'] | ['left', 'bottom'] | ['right'] | ['right', 'top'] | ['right', 'bottom'];
    type: 'primary' | 'secondary' | 'default';
};
declare function Tooltip({ children, tooltip, type, position }: Props): JSX.Element;
export default Tooltip;
