import React from 'react';
import tabsStyle from './tabs.scss';

type Props = {
  children?: any;
  onChange: Function;
  value?: number;
};

function Tabs({ children: childrenProp, onChange, value }: Props) {
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

  return <div className={tabsStyle.tabs}>{children}</div>;
}

export default Tabs;
