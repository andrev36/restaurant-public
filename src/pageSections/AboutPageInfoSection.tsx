/** @jsx jsx */
import { jsx } from '@emotion/core'
import cx from 'classnames'
import { FadeInContainer } from '../Components/animations/FadeInContainer'
import containerStyles from '../styles/containers.module.scss'
import styles from './aboutPageInfoSection.module.scss'

export const AboutPageInfoSection: React.FC = () => (
 <section>
  <section
   className={cx(containerStyles.flex_container, styles.section_wrapper)}
  >
   <img
    src={`${process.env.REACT_APP_S3_URL}/restaurant_people.jpeg`}
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
   <img  src={`${process.env.REACT_APP_S3_URL}/dining_table_person.jpeg`}
    alt='people at dining table'
   />
  </section>
 </section>
)
