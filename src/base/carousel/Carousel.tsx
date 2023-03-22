import React, { useState } from 'react';
import { COLOR_ARRAY } from '../index';

interface Props {
  color?: typeof COLOR_ARRAY[number];
  dotColor?: typeof COLOR_ARRAY[number];
  childrens: ChildNode[];
}

const Carousel = ({ color, dotColor, childrens }: Props) => {
  const [sliderActive, setSliderActive] = useState(0);
  const iconNext = (
    <svg
      width={36}
      height='36'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='36' height='36' rx='18' fill={color} />
      <path
        d='M15.5 23L20.5 18L15.5 13'
        stroke='white'
        strokeWidth='1.67'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
  const iconBack = (
    <svg
      width='36'
      height='36'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='36' height='36' rx='18' fill={color} />
      <path
        d='M20.5 23L15.5 18L20.5 13'
        stroke='white'
        strokeWidth='1.67'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
  const handleNextStep = () => {
    setTimeout(() => {}, 1000);
    if (sliderActive + 1 === childrens?.length) {
      setSliderActive(0);
    } else {
      setTimeout(() => {
        setSliderActive(sliderActive + 1);
      }, 1);
    }
  };
  const handleBackStep = () => {
    if (sliderActive === 0) {
      setSliderActive(childrens?.length - 1);
    } else {
      setSliderActive(sliderActive - 1);
    }
  };
  return (
    <div className='container'>
      <div className='carousel__container'>
        <div className='carousel__sliders'>
          {childrens?.map((slider, index) => {
            return (
              <div
                key={index}
                className='carousel__slider'
                style={{
                  left: `${(index - sliderActive) * 100}%`
                }}
              >
                {childrens[index]}
              </div>
            );
          })}
        </div>
        <div className='carousel__dot__container'>
          {childrens?.map((slider, index) => (
            <div
              key={index}
              className={`carousel__dot ${
                index === sliderActive ? 'active ' : ''
              } ${dotColor}`}
            />
          ))}
        </div>
        <div className='carousel__next' onClick={handleNextStep}>
          {iconNext}
        </div>
        <div className='carousel__back' onClick={handleBackStep}>
          {iconBack}
        </div>
      </div>
    </div>
  );
};

Carousel.defaultProp = {
  id: '',
  className: '',
  onPress: () => {},
  size: 'lg',
  icons: [],
  color: 'orange',
  category: 'primary'
};

export default Carousel;
