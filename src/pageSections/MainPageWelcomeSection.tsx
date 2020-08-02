/** @jsx jsx */
import { jsx } from '@emotion/core';
import cx from 'classnames';
import { FadeInContainer } from '../Components/animations/FadeInContainer';
import containerStyles from '../styles/containers.module.scss';
import styles from './welcomeSection.module.scss';

export const MainPageWelcomeSection = () => (
 <section
  className={cx(containerStyles.flex_container, styles.welcome_section_wrapper)}
 >
  <div className={styles.welcome_section_text_wrapper}>
   <h1>PIZZA RESTAURANT</h1>
   <FadeInContainer side='bottomSide'>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
     expedita delectus sint nam tempora. Saepe molestiae repellendus veniam
     excepturi totam commodi libero, dolorem quaerat voluptatibus mollitia
     sequi? Nihil, porro magni?
    </p>
   </FadeInContainer>
  </div>
  <FadeInContainer>
   <img
    className={styles.welcome_section_image}
    src={`${process.env.REACT_APP_S3_URL}/making_pizza.jpeg`}
    // src={MakingPizzaPicture}
    alt='making of pizza'
   />
  </FadeInContainer>
 </section>
);
