import React from 'react';
interface Props {
    mt: number;
    mr: number;
    mb: number;
    ml: number;
    pt: number;
    pr: number;
    pb: number;
    pl: number;
    col: number;
    children: React.ReactNode;
    bg: string;
    br: number;
    reversed?: boolean;
}
declare const Row: {
    ({ mt, mb, ml, mr, pt, pb, pl, pr, col, children, bg, br, reversed }: Props): JSX.Element;
    defaultProps: {
        mt: number;
        mb: number;
        mr: number;
        ml: number;
        pt: number;
        pb: number;
        pr: number;
        pl: number;
        col: number;
        bg: string;
        br: number;
    };
};
export default Row;
