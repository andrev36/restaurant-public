/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import arrowStyle from './scrollDownArrow.module.scss';

export const ScrollDownArrow = () => {
 const [firstTimeScroll, setFirstTimeScroll] = useState(false);

 const onFirstScroll = () => {
  setFirstTimeScroll(true);
 };

 useEffect(() => {
  window.addEventListener('scroll', onFirstScroll);
  return () => {
   window.removeEventListener('scroll', onFirstScroll);
  };
 }, []);

 return (
  <div className={arrowStyle.scroll_down_arrow_container}>
   {firstTimeScroll ? null : (
    <div>
     <img
      className={arrowStyle.scroll_down_arrow_icon}
      src='https://employeepassion.co.uk/wp-content/uploads/2018/05/downok.gif'
      alt='scroll down arrow'
     />
    </div>
   )}
  </div>
 );
};
