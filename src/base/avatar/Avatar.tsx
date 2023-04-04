import React from 'react';
import styles from './avatar.scss';
import { genSizeClass } from '..';

const DEFAULT_IMG =
  'https://r73troypb4obj.vcdn.cloud/picture/images/clevai-ui_default-avatar.png';

type ISize =
  | 18
  | 24
  | 30
  | 32
  | 48
  | 52
  | 120
  | {
      xl: 18 | 24 | 30 | 32 | 48 | 52 | 120;
      md: 18 | 24 | 30 | 32 | 48 | 52 | 120;
      sm: 18 | 24 | 30 | 32 | 48 | 52 | 120;
    };
interface Props {
  size: ISize;
  shape: 'square' | 'circle';
  src: string;
}

const Avatar = ({ size, shape, src, ...props }: Props) => {
  return (
    <div
      {...props}
      className={
        styles.avatar +
        ' ' +
        styles[`${shape}`] +
        ' ' +
        genSizeClass(size, 'img', styles)
      }
    >
      <img
        className={styles[`img-${src ? 'avatar' : 'default'}`]}
        src={src || DEFAULT_IMG}
        alt='image'
      />
    </div>
  );
};

Avatar.defaultProps = {
  shape: 'circle',
  src: ''
};

export default Avatar;
