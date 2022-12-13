import React from 'react';
interface Props {
    children: React.ReactNode;
    type: string;
    mt: number;
    mr: number;
    mb: number;
    ml: number;
}
declare const Label: {
    ({ mt, mb, ml, mr, children, type }: Props): JSX.Element;
    defaultProps: {
        mt: number;
        mb: number;
        mr: number;
        ml: number;
        type: string;
    };
};
export default Label;
