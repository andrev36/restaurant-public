/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useMedia } from 'react-use'
import BookTableIcon from '../assets/images/icons/candles.svg'
import MenuIcon from '../assets/images/icons/menu.svg'
import { FadeInContainer } from '../Components/animations/FadeInContainer'
import { ScrollDownArrow } from '../Components/animations/ScrollDownArrow'
import { MainSectionButton } from '../Components/MainSectionButton'
import styles from './mainSection.module.scss'

export const AboutPageMainSection: React.FC = function () {
 const isWide = useMedia('(min-width: 500px) ')
 return (
  <main className={styles.img_wrapper}>
   <img
    className={styles.img_responsive}
    src={`${process.env.REACT_APP_S3_URL}/main.jpeg`}
    alt='main'
   />
   <header className={styles.img_overlay}>
    <div
     css={css`
      position: absolute;
      left: 2vw;
      bottom: 2vh;
      margin: 20px auto 0;
      button {
       margin: auto 0.085em 0.085em;
      }
     `}
    >
     <FadeInContainer side='topSide'>
      <div className={styles.main_page_logo_wrapper}>
       <h1>Our story</h1>
      </div>
     </FadeInContainer>
     <MainSectionButton
      animationSide='bottomSide'
      alt='book table'
      linkTo='/book-table'
      icon={BookTableIcon}
     >
      BOOK TABLE
     </MainSectionButton>
     <MainSectionButton alt='menu' linkTo='/menu' icon={MenuIcon}>
      MENU
     </MainSectionButton>
    </div>
    {isWide ? <ScrollDownArrow /> : null}
   </header>
  </main>
 )
}
