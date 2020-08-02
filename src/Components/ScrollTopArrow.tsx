/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './scrollTopArrow.scss';

export const ScrollTopArrow = () => {
 const [showScroll, setShowScroll] = useState(false);

 const checkScrollTop = () => {
  if (!showScroll && window.pageYOffset > 400) {
   setShowScroll(true);
  } else if (showScroll && window.pageYOffset <= 400) {
   setShowScroll(false);
  }
 };

 const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
 };

 window.addEventListener('scroll', checkScrollTop);

 return (
  <FaArrowCircleUp
   className='scrollTop'
   onClick={scrollTop}
   css={css`
    height: 40;
    display: ${showScroll ? 'flex' : 'none'};
   `}
  />
 );
};
