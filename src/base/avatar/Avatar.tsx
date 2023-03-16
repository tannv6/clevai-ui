import React from 'react';
import styles from './avatar.scss';

const DEFAULT_IMG =
  'https://r73troypb4obj.vcdn.cloud/picture/images/clevai-ui_default-avatar.png';

interface Props {
  size: 18 | 24 | 30 | 32 | 48 | 52 | 120;
  shape: 'square' | 'circle';
  src: string;
}

const Avatar = ({ size, shape, src }: Props) => {
  return (
    <div className={styles[`img-${size}`] + ' ' + styles[`${shape}`]}>
      <img
        className={styles[`img-${src ? 'avatar' : 'default'}`]}
        src={src ? src : DEFAULT_IMG}
        alt='image'
      />
    </div>
  );
};

Avatar.defaultProps = {
  size: 52,
  shape: 'circle',
  src: ''
};

export default Avatar;
