import React from 'react';
import { Heading } from '../typography';
import { Button } from '../button';
import styles from './empty.scss';

const DEFAULT_EMPTY_IMG =
  'http://localhost:3000/clevai-ui_default-empty-icon.svg';

interface Props {
  img?: string;
  title: string;
  message: string;
  cta: string;
  bgc: string;
}

const Empty = ({ img, title, message, cta, bgc }: Props) => {
  return (
    <div style={{ backgroundColor: bgc }} className={styles.emptyWrap}>
      <div className={styles.imgWrap}>
        <img src={img ? img : DEFAULT_EMPTY_IMG} alt='Illustration' />
      </div>
      <div className={styles.text}>
        <Heading font='semibold' type='h3' align='center'>
          {title}
        </Heading>
        <Heading font='regular' type='h4' align='center' color='gray70Color'>
          {message}
        </Heading>
        <div className={styles.btn}>
          <Button category='default' size='xl'>
            {cta}
          </Button>
        </div>
      </div>
    </div>
  );
};

Empty.defaultProps = {
  bgc: '#fff'
};

export default Empty;
