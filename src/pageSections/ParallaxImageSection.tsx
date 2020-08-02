/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import BookTableIcon from '../assets/images/icons/candles.svg';
import styles from './parallaxImageSection.module.scss';

interface Props {
 backgroundImage?: string;
}

export const ParallaxImageSection = ({ backgroundImage }: Props) => (
 <Parallax bgImage={backgroundImage} strength={600}>
  <section className={styles.parallax_section_wrapper}>
   <div className={styles.parallax_section_button_wrapper}>
    <Link to='/book-table'>
     <button className='btn btn-lg btn-primary '>
      <div>
       <img src={BookTableIcon} alt='menu' />
       <span>BOOK TABLE</span>
      </div>
     </button>
    </Link>
   </div>
  </section>
 </Parallax>
);
