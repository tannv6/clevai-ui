import React from 'react';
interface Props {
    children: React.ReactNode;
    bg: string;
}
declare const Container: {
    ({ children, bg }: Props): JSX.Element;
    defaultProps: {
        bg: string;
    };
};
export default Container;
