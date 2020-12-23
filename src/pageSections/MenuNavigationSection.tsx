/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'

export const MenuNavigation: React.FC = () => (
 <React.Fragment>
  <h4>OUR OTHER MENUS (PDFs) </h4>
  <div
   css={css`
    margin: 10px auto 30px;
    span {
     border-right: 1px solid white;
     display: inline;
     padding-right: 0.5rem;
     margin: auto 0.25rem;
    }
   `}
  >
   <a
    href={`${process.env.REACT_APP_S3_URL}/example_pdf.pdf`}
    target='_blank'
    rel='noopener noreferrer'
    css={css`
     text-decoration: none;
    `}
   >
    <span>Beverages and wine</span>
   </a>
   <a
    href={`${process.env.REACT_APP_S3_URL}/example_pdf.pdf`}
    target='_blank'
    rel='noopener noreferrer'
    css={css`
     text-decoration: none;
    `}
   >
    <span>Drinks</span>
   </a>
   <a
    href={`${process.env.REACT_APP_S3_URL}/example_pdf.pdf`}
    target='_blank'
    rel='noopener noreferrer'
    css={css`
     text-decoration: none;
    `}
   >
    <span>Food</span>
   </a>
  </div>
  <div
   css={css`
    border-top: 1px white solid;
    margin: 10px auto 20px;
   `}
  />
  <h5>JUMP TO</h5>
  <div
   css={css`
    margin: 10px auto 50px;
    span {
     border-right: 1px solid white;
     display: inline;
     padding-right: 0.5rem;
     margin: auto 0.25rem;
    }
   `}
  >
   <NavLink smooth to='/menu#section-beverages' activeClassName='selected'>
    <span>Beverages and wine</span>
   </NavLink>
   <NavLink smooth to='/menu#section-drinks' activeClassName='selected'>
    <span>Drinks</span>
   </NavLink>
   <NavLink smooth to='/menu#section-food' activeClassName='selected'>
    <span>Food</span>
   </NavLink>
  </div>
 </React.Fragment>
)
