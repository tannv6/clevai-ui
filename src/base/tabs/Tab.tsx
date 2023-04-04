import React, { useMemo } from 'react';
// eslint-disable-next-line no-unused-vars
import { Icon, TIcon } from '../icon';
import tabsStyle from './tabs.scss';
import colors from '../css/colors.scss';

type Props = {
  icon?: TIcon;
  children?: string;
  size?: 'md' | 'sm' | ('md' | 'sm')[];
  selected?: boolean;
  type: 'fill' | 'text' | 'underline';
  hideLabelBreakPoint?: 'xl' | 'md' | 'sm';
  columnBreakPoint?: 'xl' | 'md' | 'sm';
};

function Tab({
  icon,
  children,
  size,
  selected,
  type,
  hideLabelBreakPoint,
  columnBreakPoint,
  ...props
}: Props) {
  const [isHover, setIsHover] = React.useState(false);
  const isSelected = (props as any).isSelected || selected;
  const mapSizeIcon = {
    md: 'md' as const,
    sm: 'sm' as const
  };
  const iconSize = useMemo(() => {
    if (typeof size === 'string') {
      return mapSizeIcon[size];
    } else if (Array.isArray(size)) {
      return [mapSizeIcon[size[0]], mapSizeIcon[size[1]], mapSizeIcon[size[2]]];
    }
    return undefined;
  }, [size]);
  return (
    <div className={tabsStyle.tabContainer}>
      <div
        className={tabsStyle.tabWrapper}
        style={{
          backgroundColor: isSelected
            ? type === 'fill'
              ? colors.primary
              : undefined
            : isHover
            ? colors.gray4
            : undefined
        }}
        onClick={(props as any).onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={`${tabsStyle.tab} 
          ${getTabClassName(size)}
          ${tabsStyle[type]}
          ${columnBreakPoint ? tabsStyle[`column-${columnBreakPoint}`] : ''}`}
          style={{
            boxShadow:
              type === 'underline' && isSelected
                ? `0 -2px 0 0 ${colors.primary} inset`
                : undefined
          }}
        >
          {icon ? (
            <Icon
              size={iconSize}
              type={icon}
              fill={
                isSelected
                  ? type === 'fill'
                    ? 'white'
                    : 'primary'
                  : isHover
                  ? 'gray70'
                  : 'gray60'
              }
            />
          ) : (
            ''
          )}
          {children && (
            <div
              className={`${tabsStyle.label} 
              ${
                hideLabelBreakPoint
                  ? tabsStyle[`hidden-${hideLabelBreakPoint}`]
                  : ''
              }`}
              style={{
                color: isSelected
                  ? type === 'fill'
                    ? colors.white
                    : colors.primary
                  : isHover
                  ? colors.gray70
                  : colors.gray60
              }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Tab.defaultProps = {
  size: 'md'
};

export default Tab;
const getTabClassName = (size?: 'md' | 'sm' | ('md' | 'sm')[]) => {
  if (typeof size === 'string') {
    return tabsStyle[size];
  } else if (Array.isArray(size)) {
    let cls = '';
    if (size[0]) {
      cls += tabsStyle[`desktop-${size[0]}`] + ' ';
    }
    if (size[1]) {
      cls += tabsStyle[`tablet-${size[1]}`] + ' ';
    }
    if (size[2]) {
      cls += tabsStyle[`mobile-${size[2]}`] + ' ';
    }
    return cls;
  }
  return '';
};
