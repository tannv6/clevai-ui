import React from 'react';
interface Props {
    children: React.ReactNode;
    bg: string;
    isFullWidth: boolean;
}
declare const Container: {
    ({ children, bg, isFullWidth }: Props): JSX.Element;
    defaultProps: {
        bg: string;
        isFullWidth: boolean;
    };
};
export default Container;
