import React from 'react';
interface Props {
    type: string;
    font: string;
    children: React.ReactNode;
}
declare const Heading: ({ children, type, font }: Props) => JSX.Element;
export default Heading;
