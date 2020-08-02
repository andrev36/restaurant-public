/** @jsx jsx */
import { jsx } from '@emotion/core';
import RectangularPizzaPicture from '../assets/images/rectangular_pizza.jpeg';
import { ImageCarousel } from '../Components/animations/ImageCarousel';
import { BookTableButton } from '../Components/forms/BookTableButton';
import { ScrollTopArrow } from '../Components/ScrollTopArrow';
import { AboutPageInfoSection } from '../pageSections/AboutPageInfoSection';
import { AboutPageMainSection } from '../pageSections/AboutPageMainSection';
import { AboutPageWelcomeSection } from '../pageSections/AboutPageWelcomeSection';
import { ParallaxImageSection } from '../pageSections/ParallaxImageSection';
import './aboutPage.scss';
import { PageWrapper } from './PageWrapper';

export const AboutPage = () => {
 return (
  <PageWrapper>
   <AboutPageMainSection />
   <AboutPageWelcomeSection />
   <ImageCarousel />
   <ParallaxImageSection backgroundImage={RectangularPizzaPicture} />
   <AboutPageInfoSection />
   <BookTableButton />
   <ScrollTopArrow />
  </PageWrapper>
 );
};
