import React from 'react';
interface Props {
    children: React.ReactNode;
    type: string;
    id: string;
}
declare const Button: {
    ({ children, type, id }: Props): JSX.Element;
    defaultProps: {
        type: string;
        id: string;
    };
};
export default Button;
