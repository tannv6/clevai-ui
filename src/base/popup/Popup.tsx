import React from 'react';
import styles from './popup.scss';
interface PopupProps {
  children: React.ReactNode;
  zIndex: number;
  isShow: boolean;
  closeOnDocumentClick: boolean;
  onClickClose: Function;
  id: string;
}
function Popup({
  children,
  id,
  isShow,
  zIndex,
  closeOnDocumentClick,
  onClickClose
}: PopupProps) {
  const [showDelay, setShowDelay] = React.useState(false);

  const timer = React.useRef<any>(null);

  React.useEffect(() => {
    if (isShow) {
      timer.current && clearTimeout(timer.current);
      timer.current = null;
      setShowDelay(true);
    }
    if (!isShow) {
      timer.current = setTimeout(() => {
        setShowDelay(false);
      }, 300);
    }
  }, [isShow]);

  if (!showDelay) {
    return <div />;
  }

  const style: React.CSSProperties = {
    zIndex: zIndex || 1,
    cursor: closeOnDocumentClick ? 'pointer' : 'default '
  };

  return (
    <div
      className={`${styles['clevai-popup']} ${
        !isShow ? styles['clevai-popup__hide'] : ''
      }`}
      id={id}
      style={style}
      onClick={() => closeOnDocumentClick && onClickClose()}
    >
      <div
        className={styles['clevai-popup__wrapper']}
        onClick={(e) => e.stopPropagation()}
      >
        <React.Suspense fallback={<span />}>{children}</React.Suspense>
      </div>
    </div>
  );
}

export default Popup;
