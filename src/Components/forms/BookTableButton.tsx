/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import BookTableIcon from '../../assets/images/icons/candles.svg';
import textStyles from '../../styles/text.module.scss';
import { FadeInContainer } from '../animations/FadeInContainer';

export const BookTableButton = () => (
 <h2 className={textStyles.text_with_lines}>
  <span
   css={css`
    position: relative;
    top: 1.8rem;
   `}
  >
   <Link to='/book-table'>
    <button
     className='btn btn-lg btn-secondary'
     css={css`
      margin: auto 15px;
     `}
    >
     <FadeInContainer side='topSide'>
      <div
       css={css`
        display: inline;
        font-size: 1.2rem;
       `}
      >
       <img
        src={BookTableIcon}
        alt='menu'
        css={css`
         width: 1.6em;
         height: 1.6em;
         margin-bottom: 0.4em;
         margin-right: 0.2em;
        `}
       />
       BOOK TABLE
      </div>
     </FadeInContainer>
    </button>
   </Link>
  </span>
 </h2>
);
