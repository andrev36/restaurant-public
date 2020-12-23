/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useMedia } from 'react-use'
import BookTableIcon from '../assets/images/icons/candles.svg'
import OrderIcon from '../assets/images/icons/home-delivery.svg'
import MenuIcon from '../assets/images/icons/menu.svg'
import LogoPizza from '../assets/images/icons/pizza.svg'
import { FadeInContainer } from '../Components/animations/FadeInContainer'
import { ScrollDownArrow } from '../Components/animations/ScrollDownArrow'
import { MainSectionButton } from '../Components/MainSectionButton'
import containerStyle from '../styles/containers.module.scss'
import styles from './mainSection.module.scss'

export const MainPageSectionMain: React.FC = () => {
 const isWide = useMedia('(min-width: 500px) ')
 return (
  <main className={styles.img_wrapper}>
   <img
    className={styles.img_responsive}
    src={`${process.env.REACT_APP_S3_URL}/main.jpeg`}
    alt='main'
   />
   <header className={styles.img_overlay}>
    <div className={styles.main_page_logo_wrapper}>
     <div className={containerStyle.align_center_container}>
      <a className='navbar-brand' href='/'>
       <FadeInContainer>
        <img
         src={LogoPizza}
         alt='logo'
         css={css`
          width: 3.5rem;
          height: 3.5rem;
         `}
        />
       </FadeInContainer>
      </a>
     </div>
     <div className={containerStyle.align_center_container}>
      <h2>PIZZA</h2>
     </div>
    </div>
    <div
     css={css`
      width: 80%;
      margin: 1rem auto;
     `}
    >
     <MainSectionButton
      animationSide='topSide'
      alt='menu'
      linkTo='/menu'
      icon={MenuIcon}
     >
      MENU
     </MainSectionButton>
     <MainSectionButton
      animationSide='bottomSide'
      alt='book table'
      linkTo='/book-table'
      icon={BookTableIcon}
     >
      BOOK TABLE
     </MainSectionButton>
     <MainSectionButton
      animationSide='topSide'
      alt='delivery'
      linkTo='/order'
      icon={OrderIcon}
     >
      DELIVERY
     </MainSectionButton>
    </div>
    {isWide ? <ScrollDownArrow /> : null}
   </header>
  </main>
 )
}
