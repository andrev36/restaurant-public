/** @jsx jsx */
import { jsx } from '@emotion/core';
import styles from '../pages/menuPage.module.scss';
import textStyles from '../styles/text.module.scss';

export const Menu = () => (
 <main>
  <h1 className={textStyles.text_with_lines} id='section-beverages'>
   <span>BEVERAGES</span>
  </h1>
  <section className={styles.menu}>
   <ul className='list-group list-group-flush '>
    <li className='list-group-item'>
     <span className={styles.dish_title}>
      <h2>Dish</h2>
      Refined Steel Salad
     </span>
     <p className={styles.dish_price}>46:-</p>
    </li>
    <li className='list-group-item'>
     <span className={styles.dish_title}>
      <h2>Dish</h2>
      Refined Steel Salad
     </span>
     <p className={styles.dish_price}>46:-</p>
    </li>
    <li className='list-group-item'>
     <span className={styles.dish_title}>
      <h2>Dish</h2>
      Refined Steel Salad
     </span>
     <p className={styles.dish_price}>46:-</p>
    </li>
   </ul>
   <h2 className={textStyles.text_with_lines} id='section-drinks'>
    <span>DRINKS</span>
   </h2>
   <ul className='list-group list-group-flush '>
    <li className='list-group-item'>
     <span className={styles.dish_title}>
      <h2>Dish</h2>
      Refined Steel Salad
     </span>
     <p className={styles.dish_price}>46:-</p>
    </li>
    <li className='list-group-item'>
     <span className={styles.dish_title}>
      <h2>Dish</h2>
      Refined Steel Salad
     </span>
     <p className={styles.dish_price}>46:-</p>
    </li>
    <li className='list-group-item'>
     <span className={styles.dish_title}>
      <h2>Dish</h2>
      Refined Steel Salad
     </span>
     <p className={styles.dish_price}>46:-</p>
    </li>
   </ul>
   <h2 className={textStyles.text_with_lines} id='section-food'>
    <span>FOOD</span>
   </h2>
   <ul className='list-group list-group-flush '>
    <li className='list-group-item'>
     <span className={styles.dish_title}>
      <h2>Dish</h2>
      Refined Steel Salad
     </span>
     <p className={styles.dish_price}>46:-</p>
    </li>
    <li className='list-group-item'>
     <span className={styles.dish_title}>
      <h2>Dish</h2>
      Refined Steel Salad
     </span>
     <p className={styles.dish_price}>46:-</p>
    </li>
    <li className='list-group-item'>
     <span className={styles.dish_title}>
      <h2>Dish</h2>
      Refined Steel Salad
     </span>
     <p className={styles.dish_price}>46:-</p>
    </li>
   </ul>
  </section>
 </main>
);
