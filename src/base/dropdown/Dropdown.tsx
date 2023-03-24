import React, { useEffect, useRef, useState } from 'react';
import dropdownStyles from './dropdown.scss';

type TOption = {
  id: number | string;
  label: number | string;
};

type Props = {
  options: TOption[];
  value?: TOption | TOption[] | null | Partial<TOption>;
  onChange?: any;
  multi?: boolean;
  placeholder?: string;
  onSearch?: Function;
  label?: string;
  error?: string;
  required?: boolean;
  inline?: boolean;
  disabled?: boolean;
};

function Dropdown({
  options,
  value,
  onChange,
  multi,
  placeholder,
  onSearch,
  label,
  error,
  required,
  inline,
  disabled
}: Props) {
  const [showList, setShowList] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const searchMultiRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (showList) {
      searchRef.current && searchRef.current.focus();
      searchMultiRef.current && searchMultiRef.current.focus();
      if (listRef.current) {
        setTimeout(() => {
          listRef.current &&
            listRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'nearest'
            });
        }, 100);
      }
    } else {
      setInputValue('');
      searchRef.current && searchRef.current.blur();
      searchMultiRef.current && searchMultiRef.current.blur();
    }
  }, [showList]);

  const handleChangeInput = (e: any) => {
    const { value } = e.target;
    setInputValue(value);
    onSearch && onSearch(value);
  };

  const handleDeleteSelected = (e: any, item: TOption) => {
    e.stopPropagation();
    if (multi && Array.isArray(value) && typeof item === 'object') {
      const newValue = [...value].filter((e) => e.id !== item.id);
      onChange({
        ...e,
        target: { ...e.target, value: newValue }
      });
    }
  };

  const handleChangeValue = (e: any, item: TOption) => {
    if (multi && Array.isArray(value) && typeof item === 'object') {
      if (!value.find((e) => e.id === item.id)) {
        onChange({ ...e, target: { ...e.target, value: value.concat(item) } });
      }
    } else if (!multi && typeof item === 'object') {
      onChange({ ...e, target: { ...e.target, value: item } });
    }
    if (!multi) {
      setTimeout(() => {
        setShowList(false);
      }, 100);
    } else {
      searchMultiRef.current && searchMultiRef.current.focus();
    }
  };

  const handleDeleteAll = (e: any) => {
    e.stopPropagation();
    if (multi) {
      onChange({ target: { value: [] } });
      searchMultiRef.current && searchMultiRef.current.focus();
    } else {
      handleChangeInput({ target: { value: '' } });
      searchRef.current && searchRef.current.focus();
    }
  };

  if (multi) {
    if (!Array.isArray(value)) {
      console.error('Value must be an array in multi mode');
      return <React.Fragment />;
    } else {
      let flag = false;
      value.forEach((item) => {
        if (!item || typeof item !== 'object') {
          console.error('item must be an object in multi mode');
          flag = true;
        } else {
          if (!Object.keys(item).includes('id')) {
            flag = true;
            console.error(
              'id props is missing in type { id: number | string; label: number | string;}1'
            );
          }
          if (!Object.keys(item).includes('label')) {
            flag = true;
            console.error(
              'label props is missing in type { id: number | string; label: number | string;}'
            );
          }
        }
      });
      if (flag) {
        return <React.Fragment />;
      }
    }
  }

  if (!multi) {
    if (Array.isArray(value) || typeof value !== 'object') {
      console.error('Value must be an object in single mode');
      return <React.Fragment />;
    }
  }

  if (!Array.isArray(options)) {
    console.error('Options must be an array');
    return <React.Fragment />;
  }

  if (Array.isArray(options)) {
    let flag = false;
    options.forEach((item) => {
      if (!item || typeof item !== 'object') {
        flag = true;
        console.error('item must be an object in multi mode');
      } else {
        if (!Object.keys(item).includes('id')) {
          flag = true;
          console.error(
            'id props is missing in type { id: number | string;label: number | string;}'
          );
        }
        if (!Object.keys(item).includes('label')) {
          flag = true;
          console.error(
            'label props is missing in type { id: number | string;label: number | string;}'
          );
        }
      }
    });
    if (flag) {
      return <React.Fragment />;
    }
  }

  return (
    <div
      className={`${dropdownStyles.dropdownGroup} ${
        inline ? dropdownStyles.dropdownGroupInline : ''
      } ${disabled ? dropdownStyles.dropdownGroupDisabled : ''}`}
      style={{
        zIndex: showList ? 2 : 1
      }}
    >
      <div className={dropdownStyles.label}>
        {label}
        {required ? <span className={dropdownStyles.required}>*</span> : ''}
      </div>
      <div className={dropdownStyles.container}>
        <div
          className={`${dropdownStyles.main} ${
            error ? dropdownStyles.mainError : ''
          }`}
          onClick={() => {
            !disabled && setShowList(!showList);
          }}
        >
          <div className={dropdownStyles.selectedList}>
            {multi ? (
              Array.isArray(value) && value.length > 0 ? (
                value?.map((item, i) => {
                  return (
                    <div key={i} className={dropdownStyles.selected}>
                      {item.label}
                      <span
                        className={dropdownStyles.deleteIcon}
                        onClick={(e) => handleDeleteSelected(e, item)}
                      >
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5.13807 4.19526C4.87772 3.93491 4.45561 3.93491 4.19526 4.19526C3.93491 4.45561 3.93491 4.87772 4.19526 5.13807L7.05719 8L4.19526 10.8619C3.93491 11.1223 3.93491 11.5444 4.19526 11.8047C4.45561 12.0651 4.87772 12.0651 5.13807 11.8047L8 8.94281L10.8619 11.8047C11.1223 12.0651 11.5444 12.0651 11.8047 11.8047C12.0651 11.5444 12.0651 11.1223 11.8047 10.8619L8.94281 8L11.8047 5.13807C12.0651 4.87772 12.0651 4.45561 11.8047 4.19526C11.5444 3.93491 11.1223 3.93491 10.8619 4.19526L8 7.05719L5.13807 4.19526Z'
                            fill='#666B70'
                          />
                        </svg>
                      </span>
                    </div>
                  );
                })
              ) : (
                <span className={dropdownStyles.placeholder}>Chọn</span>
              )
            ) : (
              !Array.isArray(value) && (
                <input
                  className={`${dropdownStyles.singleSearch} ${
                    value ? dropdownStyles.singleSearchSelected : ''
                  }`}
                  ref={searchRef}
                  type='text'
                  placeholder={
                    (value?.label as string) || placeholder || 'Chọn'
                  }
                  value={inputValue}
                  onChange={handleChangeInput}
                />
              )
            )}
          </div>
          {(multi && Array.isArray(value) && value.length > 0) ||
          (!multi && inputValue) ? (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={handleDeleteAll}
            >
              <g clipPath='url(#clip0_2138_24770)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7.61612 7.61612C8.10427 7.12796 8.89573 7.12796 9.38388 7.61612L12 10.2322L14.6161 7.61612C15.1043 7.12796 15.8957 7.12796 16.3839 7.61612C16.872 8.10427 16.872 8.89573 16.3839 9.38388L13.7678 12L16.3839 14.6161C16.872 15.1043 16.872 15.8957 16.3839 16.3839C15.8957 16.872 15.1043 16.872 14.6161 16.3839L12 13.7678L9.38388 16.3839C8.89573 16.872 8.10427 16.872 7.61612 16.3839C7.12796 15.8957 7.12796 15.1043 7.61612 14.6161L10.2322 12L7.61612 9.38388C7.12796 8.89573 7.12796 8.10427 7.61612 7.61612Z'
                  fill='#B3B5B8'
                />
              </g>
            </svg>
          ) : (
            ''
          )}
          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{
              transform: `${showList ? `scaleY(-1)` : ''}`
            }}
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M18.7071 8.79289C19.0976 9.18342 19.0976 9.81658 18.7071 10.2071L12.7071 16.2071C12.3166 16.5976 11.6834 16.5976 11.2929 16.2071L5.29289 10.2071C4.90237 9.81658 4.90237 9.18342 5.29289 8.79289C5.68342 8.40237 6.31658 8.40237 6.70711 8.79289L12 14.0858L17.2929 8.79289C17.6834 8.40237 18.3166 8.40237 18.7071 8.79289Z'
              fill='#808089'
            />
          </svg>
        </div>
        {showList && (
          <div className={dropdownStyles.listWrapper} ref={listRef}>
            {multi && (
              <div className={dropdownStyles.searchMulti}>
                <input
                  ref={searchMultiRef}
                  type='text'
                  placeholder='Search'
                  value={inputValue}
                  onChange={handleChangeInput}
                />
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  onClick={() => {
                    handleChangeInput({ target: { value: '' } });
                    searchMultiRef.current && searchMultiRef.current.focus();
                  }}
                >
                  <g clipPath='url(#clip0_2138_24770)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7.61612 7.61612C8.10427 7.12796 8.89573 7.12796 9.38388 7.61612L12 10.2322L14.6161 7.61612C15.1043 7.12796 15.8957 7.12796 16.3839 7.61612C16.872 8.10427 16.872 8.89573 16.3839 9.38388L13.7678 12L16.3839 14.6161C16.872 15.1043 16.872 15.8957 16.3839 16.3839C15.8957 16.872 15.1043 16.872 14.6161 16.3839L12 13.7678L9.38388 16.3839C8.89573 16.872 8.10427 16.872 7.61612 16.3839C7.12796 15.8957 7.12796 15.1043 7.61612 14.6161L10.2322 12L7.61612 9.38388C7.12796 8.89573 7.12796 8.10427 7.61612 7.61612Z'
                      fill='#B3B5B8'
                    />
                  </g>
                </svg>
              </div>
            )}
            <div className={dropdownStyles.list}>
              {Array.isArray(value)
                ? options
                    .filter((e) => !value?.find((e1) => e1.id === e.id))
                    .map((item, i) => {
                      return (
                        <div
                          className={dropdownStyles.element}
                          key={i}
                          onClick={(e) => handleChangeValue(e, item)}
                        >
                          <div className={dropdownStyles.optionLabel}>
                            {item.label}
                          </div>
                        </div>
                      );
                    })
                : options.map((item, i) => {
                    return (
                      <div
                        className={dropdownStyles.element}
                        key={i}
                        onClick={(e) => handleChangeValue(e, item)}
                      >
                        <div className={dropdownStyles.optionLabel}>
                          {item.label}
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        )}
        {showList && (
          <div
            className={dropdownStyles.bg}
            onClick={() => !disabled && setShowList(false)}
          />
        )}
      </div>
      {error && <div className={dropdownStyles.errorMessage}>{error}</div>}
    </div>
  );
}

export default Dropdown;
