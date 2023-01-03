import React from 'react';
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    icons?: ('facebook' | 'circle')[];
    width?: string;
    color: 'orange' | 'blue' | 'green' | 'crimson';
    size: 'sm' | 'md' | 'lg' | 'xl';
    reversed?: boolean;
    category: 'primary' | 'default' | 'text' | 'link';
    loading?: boolean;
}
declare const Button: {
    ({ children, icons, color, size, width, reversed, category, loading, ...props }: Props): JSX.Element;
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
