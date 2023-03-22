import React, { useState, useEffect } from 'react';
import { Icon } from '../icon';
import styles from './pagination.scss';

interface Props {
  total: number;
  current: number;
  limit: number;
  onChangePage: (value: number) => void;
  pageType?: 'square' | 'circle';
  className?: string;
}

type TempPages = (string | number)[];

const Pagination = ({
  total,
  current,
  limit,
  pageType,
  onChangePage,
  className,
  ...props
}: Props) => {
  const count = Math.ceil(total / limit);
  const pages = Array.from(Array(count).keys()).map((value) => value + 1);
  const [arrOfPages, setArrOfPages] = useState<TempPages>(pages);

  useEffect(() => {
    const pagesLength = pages.length;
    if (pagesLength > 6) {
      let tempPages: TempPages = pages;
      if (current >= 1 && current <= 5) {
        tempPages = [1, 2, 3, 4, 5, 6, '...'];
      }
      if (current >= 6) {
        const sliced = pages.slice(current - 5, current + 1);
        if (current + 1 === count) {
          tempPages = ['...', ...sliced];
        } else {
          tempPages = ['...', ...sliced, '...'];
        }
      }
      if (current === count) {
        tempPages = [
          '...',
          pagesLength - 5,
          pagesLength - 4,
          pagesLength - 3,
          pagesLength - 2,
          pagesLength - 1,
          pagesLength
        ];
      }
      setArrOfPages(tempPages);
    }
  }, [current]);

  return (
    <div
      {...props}
      className={`${styles.pagination} ${className ? className : ''}`}
    >
      <div
        className={`${styles.btn} ${current === 1 ? styles.disabled : ''} ${
          styles[`${pageType}`]
        }`}
        onClick={() => {
          onChangePage(1);
        }}
      >
        <Icon
          type='arrowLeftV3'
          size='xs'
          fill={current === 1 ? 'gray30Color' : 'gray60Color'}
        />
      </div>
      <div
        className={`${styles.btn} ${current === 1 ? styles.disabled : ''} ${
          styles[`${pageType}`]
        }`}
        onClick={() => {
          onChangePage(current - 1);
        }}
      >
        <Icon
          type='arrowLeftV2'
          size='xs'
          fill={current === 1 ? 'gray30Color' : 'gray60Color'}
        />
      </div>
      <div className={styles.pagesWrap}>
        {arrOfPages.map((page: any) => {
          return (
            <div
              key={page}
              onClick={() => {
                onChangePage(page);
              }}
              className={`${styles.page} ${
                current === page ? styles.active : ''
              } ${styles[`${pageType}`]} ${
                page === '...' ? styles.disabled : ''
              }`}
            >
              {page}
            </div>
          );
        })}
      </div>
      <div
        className={`${styles.btn} ${current === count ? styles.disabled : ''}`}
        onClick={() => {
          onChangePage(current + 1);
        }}
      >
        <Icon
          type='arrowRightV2'
          size='xs'
          fill={current === count ? 'gray30Color' : 'gray60Color'}
        />
      </div>
      <div
        className={`${styles.btn} ${current === count ? styles.disabled : ''} ${
          styles[`${pageType}`]
        }`}
        onClick={() => {
          onChangePage(count);
        }}
      >
        <Icon
          type='arrowRightV3'
          size='xs'
          fill={current === count ? 'gray30Color' : 'gray60Color'}
        />
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  pageType: 'square'
};

export default Pagination;
