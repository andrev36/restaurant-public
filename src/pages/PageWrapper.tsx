/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FooterWrapper } from '../Components/layout/Footer';
import { Navbar } from '../Components/layout/Navbar';
import { ScrollTopArrow } from '../Components/ScrollTopArrow';

export const PageWrapper = ({ children }: any) => {
 return (
  <FooterWrapper>
   <Navbar />
   <div
    css={css`
     margin: 56px auto 0;
    `}
   >
    {children}
   </div>
   <ScrollTopArrow />
  </FooterWrapper>
 );
};
