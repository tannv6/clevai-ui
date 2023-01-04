interface Props {
    size: string;
    color: string;
    type: string;
    fill?: string;
}
declare const Icon: {
    ({ size, color, type, fill }: Props): JSX.Element;
    defaultProp: {
        size: string;
        color: string;
        type: string;
        fill: string;
    };
};
export default Icon;
