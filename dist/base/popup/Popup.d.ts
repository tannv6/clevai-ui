import React from 'react';
interface PopupProps {
    children: React.ReactNode;
    zIndex: number;
    isShow: boolean;
    closeOnDocumentClick: boolean;
    onClickClose: Function;
    id: string;
}
declare function Popup({ children, id, isShow, zIndex, closeOnDocumentClick, onClickClose }: PopupProps): JSX.Element;
export default Popup;
