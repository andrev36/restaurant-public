/** @jsx jsx */
import { jsx } from '@emotion/core'
import PizzasOvenPicture from '../assets/images/pizzas_oven.jpeg'
import { ImageAspectRatio } from '../Components/ImageAspectRatio'
import { ImageGallery } from '../Components/ImageGallery'
import { ScrollTopArrow } from '../Components/ScrollTopArrow'
import { MainPageSectionMain } from '../pageSections/MainPageSectionMain'
import { MainPageWeeklyInfoSection } from '../pageSections/MainPageWeeklyInfoSection'
import { MainPageWelcomeSection } from '../pageSections/MainPageWelcomeSection'
import { ParallaxImageSection } from '../pageSections/ParallaxImageSection'
import { RestaurantLocationSection } from '../pageSections/RestaurantLocationSection'
import { PageWrapper } from './PageWrapper'

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Main page have funtionalities like parallax effect,
* location map, image gallery, scroll to top button, main
* section with animated buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const MainPage: React.FC = () => {
 return (
  <PageWrapper>
   <MainPageSectionMain />
   <div className='container'>
    <MainPageWelcomeSection />
    <MainPageWeeklyInfoSection />
   </div>
   <ImageAspectRatio
    src={`${process.env.REACT_APP_S3_URL}/garden_delivery.jpeg`}
   />
   <ImageGallery />
   <ParallaxImageSection backgroundImage={PizzasOvenPicture} />
   <RestaurantLocationSection />
   <ScrollTopArrow />
  </PageWrapper>
 )
}
