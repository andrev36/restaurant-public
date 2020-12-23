/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import containerStyles from '../styles/containers.module.scss'
import textStyles from '../styles/text.module.scss'

export const MainPageWeeklyInfoSection: React.FC = () => (
 <React.Fragment>
  <h2 className={textStyles.text_with_lines}>
   <span>WEEKLY AGENDA</span>
  </h2>
  <section className={containerStyles.flex_container}>
   <div
    css={css`
     margin: 10px 20px;
    `}
   >
    <h3>THURSDAY</h3>
    <div className={textStyles.text}>
     BEER, WINE & BURGERS,BEER, WINE & BURGERS
    </div>
    <div className={textStyles.text}>POST OFFICE HOURS</div>
   </div>
   <div>
    <h3>THURSDAY</h3>
    <div className={textStyles.text}>
     BEER, WINE & BURGERS,BEER, WINE & BURGERS
    </div>
    <div className={textStyles.text}>POST OFFICE HOURS</div>
   </div>
  </section>
 </React.Fragment>
)
