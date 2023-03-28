import React from 'react';
import { Heading } from '../typography';
import { Button } from '../button';
import styles from './empty.scss';
import { Row } from '../layout';

const DEFAULT_EMPTY_IMG =
  'https://r73troypb4obj.vcdn.cloud/picture/images/clevai-ui_default-empty-icon.svg';

interface Props {
  src?: string;
  title: string;
  message: string;
  btnText: string;
  bgColor: string;
}

const Empty = ({ src, title, message, btnText, bgColor }: Props) => {
  return (
    <div style={{ backgroundColor: bgColor }} className={styles.emptyWrap}>
      <div className={styles.imgWrap}>
        <img src={src ? src : DEFAULT_EMPTY_IMG} alt='Illustration' />
      </div>
      <div className={styles.text}>
        <Heading font='semibold' type='h3' align='center'>
          {title}
        </Heading>
        <Row mt={4}>
          <Heading font='regular' type='h4' align='center' color='gray70Color'>
            {message}
          </Heading>
        </Row>
        <Row mt={14}>
          <Button category='default' size='xl'>
            {btnText}
          </Button>
        </Row>
      </div>
    </div>
  );
};

Empty.defaultProps = {
  bgColor: '#fff'
};

export default Empty;
