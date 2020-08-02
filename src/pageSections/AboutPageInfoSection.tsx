/** @jsx jsx */
import { jsx } from '@emotion/core';
import cx from 'classnames';
import DiningTablePersonPicture from '../assets/images/dining_table_person.jpeg';
import RestaurantPeoplePicture from '../assets/images/restaurant_people.jpeg';
import { FadeInContainer } from '../Components/animations/FadeInContainer';
import containerStyles from '../styles/containers.module.scss';
import styles from './aboutPageInfoSection.module.scss';

export const AboutPageInfoSection = () => (
 <section>
  <section
   className={cx(containerStyles.flex_container, styles.section_wrapper)}
  >
   <img // src=`${REACT_APP_S3_URL}/restaurant_people.jpeg`
    src={RestaurantPeoplePicture}
    alt='people in restaurant'
   />
   <FadeInContainer>
    <article>
     <span>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo saepe
      temporibus consequatur officia facilis aut autem architecto provident ea!
      Sed!
     </span>
    </article>
   </FadeInContainer>
  </section>
  <section
   className={cx(containerStyles.flex_container, styles.section_wrapper)}
  >
   <FadeInContainer side='leftSide'>
    <article>
     <span>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo saepe
      temporibus consequatur officia facilis aut autem architecto provident ea!
      Sed!
     </span>
    </article>
   </FadeInContainer>
   <img // src=`${REACT_APP_S3_URL}/dining_table_person.jpeg`
    src={DiningTablePersonPicture}
    alt='people at dining table'
   />
  </section>
 </section>
);
