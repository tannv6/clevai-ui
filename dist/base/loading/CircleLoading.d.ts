interface Props {
    border: number;
    width: number;
    color?: ('gray4Color' | 'gray10Color')[];
}
declare function CircleLoading({ border, width, color }: Props): JSX.Element;
declare namespace CircleLoading {
    var defaultProp: {
        border: number;
        width: number;
        color: never[];
    };
}
export default CircleLoading;
