import React from 'react';
interface Props {
    children: React.ReactNode;
    id: string;
    className?: string;
    isDisable?: boolean;
    onPress?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    icons?: ('facebook' | 'circle')[];
    width?: string;
    type: 'primary' | 'default' | 'text' | 'link';
    system: 'student' | 'parent';
    size: 'sm' | 'md' | 'lg' | 'xl';
}
declare const Button: {
    ({ children, id, className, onPress, isDisable, icons, type, system, size, width }: Props): JSX.Element;
    defaultProp: {
        id: string;
        className: string;
        onPress: () => void;
        type: string;
        system: string;
        size: string;
        icons: never[];
    };
};
export default Button;
