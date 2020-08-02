/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cx from 'classnames';
import MailIcon from '../assets/images/icons/message.svg';
import { FadeInContainer } from '../Components/animations/FadeInContainer';
import buttonStyle from '../Components/mainSectionButton.module.scss';
import {
 default as containerStyle,
 default as containerStyles
} from '../styles/containers.module.scss';
import styles from './welcomeSection.module.scss';

export const AboutPageWelcomeSection = () => (
 <section
  className={cx(containerStyles.flex_container, styles.welcome_section_wrapper)}
 >
  <article className={styles.welcome_section_text_wrapper}>
   <h1>Our chef</h1>
   <p>Passion</p>
   <FadeInContainer side='topSide'>
    <p>
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo saepe
     temporibus consequatur officia facilis aut autem architecto provident ea!
     Sed!
    </p>
   </FadeInContainer>
   <div className={buttonStyle.main_section_button_wrapper}>
    <button className='btn btn-lg btn-secondary'>
     <FadeInContainer>
      <div className={containerStyle.align_center_container}>
       <img
        src={MailIcon}
        alt='contact'
        className={buttonStyle.main_section_button_icon}
       />
       <span>
        <a
         href='mailto:example@gmail.com'
         css={css`
          color: white;
         `}
        >
         CONTACT
        </a>
       </span>
      </div>
     </FadeInContainer>
    </button>
   </div>
  </article>
  <FadeInContainer>
   <img
    src={`${process.env.REACT_APP_S3_URL}/restaurant_people.jpeg`}
    // src={RestaurantPeoplePicture}
    className={styles.welcome_section_image}
    alt='people in restaurant'
   />
  </FadeInContainer>
 </section>
);
