import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Icon, TIcon } from '../icon';
import tabsStyle from './tabs.scss';
import colors from '../css/colors.scss';

type Props = {
  icon?: TIcon;
  children?: string;
  size?: 'md' | 'sm';
  selected?: boolean;
};

function Tab({ icon, children, size, selected, ...props }: Props) {
  const [isHover, setIsHover] = React.useState(false);
  const isSelected = (props as any).isSelected || selected;
  const mapSizeIcon = {
    md: 'md',
    sm: 'sm'
  };
  return (
    <div
      className={`${tabsStyle.tab} ${tabsStyle[`tab-size-${size}`]}`}
      style={{
        backgroundColor: isSelected
          ? colors.primary
          : isHover
          ? colors.gray4
          : colors.white
      }}
      onClick={(props as any).onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {icon ? (
        <Icon
          size={mapSizeIcon[size || '']}
          type={icon}
          fill={isSelected ? 'white' : isHover ? 'gray70' : 'gray60'}
        />
      ) : (
        ''
      )}
      {children && (
        <div
          className={`${tabsStyle.label} ${tabsStyle[size || '']}`}
          style={{
            color: isSelected
              ? colors.white
              : isHover
              ? colors.gray70
              : colors.gray60
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

Tab.defaultProps = {
  size: 'md'
};

export default Tab;
