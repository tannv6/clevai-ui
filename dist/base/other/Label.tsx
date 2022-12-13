import React from 'react';
interface Label {
  children: React.ReactNode;
  bg: string;
}

declare const Label: {
  ({ children, bg }: Props): JSX.Element;
  defaultProps: {
    bg: string;
  };
};
export default Label;
