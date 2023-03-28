import React from 'react';
import { GRID_VALUES } from '..';
import tabsStyle from './tabs.scss';

type Props = {
  children?: any;
  onChange: Function;
  value?: number | null;
  gutters?:
    | typeof GRID_VALUES[number]
    | {
        xl: typeof GRID_VALUES[number];
        md: typeof GRID_VALUES[number];
        sm: typeof GRID_VALUES[number];
      };
};

function Tabs({ children: childrenProp, onChange, value, gutters }: Props) {
  let childIndex = 0;
  const children = React.Children.map(childrenProp, (child) => {
    const childValue =
      child.props.value === undefined ? childIndex : child.props.value;
    childIndex += 1;
    const isSelected = childValue === value;
    return React.cloneElement(child, {
      onClick: (e) => {
        onChange(e, childValue);
      },
      isSelected
    });
  });

  return (
    <div className={`${tabsStyle.tabs} ${genGutters(gutters)}`}>{children}</div>
  );
}

export default Tabs;

const genGutters = (gutters: any) => {
  if (typeof gutters === 'number') {
    return tabsStyle[`gutter-${gutters}`];
  } else if (typeof gutters === 'object') {
    let gutterClass = '';
    if (gutters.xl) {
      gutterClass += tabsStyle[`gutter-xl-${gutters}`] += ' ';
    }
    if (gutters.md) {
      gutterClass += tabsStyle[`gutter-md-${gutters}`] += ' ';
    }
    if (gutters.sm) {
      gutterClass += tabsStyle[`gutter-sm-${gutters}`] += ' ';
    }

    return gutterClass;
  }
  return '';
};
