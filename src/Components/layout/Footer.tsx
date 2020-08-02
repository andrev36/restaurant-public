/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import LogoPizza from '../../assets/images/icons/pizza.svg';
import containerStyles from '../../styles/containers.module.scss';
import textStyles from '../../styles/text.module.scss';
import { FadeInContainer } from '../animations/FadeInContainer';
import styles from './footer.module.scss';

export const Footer = () => {
 return (
  <footer className={styles.site_footer}>
   <section className='container'>
    <div
     className='row'
     css={css`
      div {
       margin: auto 1.25rem;
      }
     `}
    >
     <div
      className='col-sm'
      css={css`
       text-align: center;
      `}
     >
      <FadeInContainer>
       <a className='navbar-brand' href='/'>
        <img
         className={containerStyles.align_center_container}
         src={LogoPizza}
         alt='pizza logo'
         css={css`
          width: 5.5rem;
          height: 5.5rem;
         `}
        />
       </a>
       <h1 className={containerStyles.align_center_container}>PIZZA</h1>
      </FadeInContainer>
      <p className={cx('text-justify ', textStyles.text)}>
       lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
       sit amet lorem ipsum dolor sit amet
      </p>
     </div>
     <header
      className='col-sm'
      css={css`
       text-align: left;
      `}
     >
      <h3>MENUS</h3>
      <ul className={styles.footer_links}>
       <li>
        <NavLink to='/menu'>MENU</NavLink>
       </li>
       <li>
        <NavLink to='/menu'>DRINKS</NavLink>
       </li>
       <li>
        <NavLink to='/menu'>BEVERAGES</NavLink>
       </li>
       <li>
        <NavLink to='/menu'>FOOD</NavLink>
       </li>
      </ul>
     </header>
     <address
      className='col-sm'
      css={css`
       text-align: left;
      `}
     >
      <h3 className={textStyles.title}>CONTACT</h3>
      <ul className={styles.footer_links}>
       <li>
        <a
         href='mailto:example@gmail.com'
         target='_blank'
         rel='noopener noreferrer'
        >
         example@gmail.com
        </a>
       </li>
       <li>
        <a href='#'>Cracow</a>
       </li>
      </ul>
     </address>
    </div>
    <hr />
   </section>
   <section className='container'>
    <div className='row'>
     <header className='col-md-4 col-sm-6 col-xs-12'>
      <h6
       className={textStyles.title}
       css={css`
        text-align: right;
       `}
      >
       FOLLOW US
      </h6>
      <ul className={styles.social_icons}>
       <li>
        <a className={styles.facebook} href='#'>
         <i className='fa fa-facebook'></i>
        </a>
       </li>
       <li>
        <a className={styles.twitter} href='#'>
         <i className='fa fa-twitter'></i>
        </a>
       </li>
       <li>
        <a className={styles.dribbble} href='#'>
         <i className='fa fa-dribbble'></i>
        </a>
       </li>
       <li>
        <a className={styles.linkedin} href='#'>
         <i className='fa fa-linkedin'></i>
        </a>
       </li>
      </ul>
     </header>
    </div>
   </section>
  </footer>
 );
};

export const FooterWrapper = ({ children }: any) => {
 return (
  <div
   className={styles.page_container}
   css={css`
    background-color: #170600;
   `}
  >
   <div className={styles.content_wrap}>{children}</div>
   <footer className={styles.footer}>
    <Footer />
   </footer>
  </div>
 );
};
