import React from 'react';
interface Props {
    type: string;
    font: string;
    children: React.ReactNode;
    display: string;
    align: string;
    color: string;
    id?: string;
}
declare const Heading: {
    ({ children, type, font, display, align, color, id }: Props): JSX.Element;
    defaultProps: {
        display: string;
        align: string;
        color: string;
    };
};
export default Heading;
