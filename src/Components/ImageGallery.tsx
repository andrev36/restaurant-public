/** @jsx jsx */
import { jsx } from '@emotion/core';
import cx from 'classnames';
import SharingPizzaPicture from '../assets/images/sharing_pizza.jpeg';
import styles from './imageGallery.module.scss';

export const ImageGallery = () => (
 <section className={cx(styles.image_gallery, 'container-fluid')}>
  <img src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`} />
  {/* <img src={SharingPizzaPicture} alt='sharing pizza' /> */}
  <img src={`${process.env.REACT_APP_S3_URL}/garden_delivery.jpeg`} />
  {/* <img src={GardenDeliveryPicture} alt='pizza in garden' /> */}
  <img src={`${process.env.REACT_APP_S3_URL}/dining_table_person.jpeg`} />
  {/* <img src={DiningTablePersonPicture} alt='dining table' /> */}
  <img src={SharingPizzaPicture} alt='sharing pizza' />
 </section>
);
