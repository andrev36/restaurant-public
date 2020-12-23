/** @jsx jsx */
import { jsx } from '@emotion/core'
import cx from 'classnames'
import SharingPizzaPicture from '../assets/images/sharing_pizza.jpeg'
import styles from './imageGallery.module.scss'

export const ImageGallery: React.FC = () => (
 <section className={cx(styles.image_gallery, 'container-fluid')}>
  <img src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`} alt='sharing pizza'   />
  <img src={`${process.env.REACT_APP_S3_URL}/garden_delivery.jpeg`} alt='garden delivery'/>
  <img src={`${process.env.REACT_APP_S3_URL}/dining_table_person.jpeg`} alt='dining table'/>
  <img src={SharingPizzaPicture} alt='sharing pizza' />
 </section>
)
