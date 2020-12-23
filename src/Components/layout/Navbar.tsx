/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { NavLink } from 'react-router-dom'
import LogoPizza from '../../assets/images/icons/pizza3.svg'
import theme from '../../styles/theme.module.scss'
import './navbar.scss'

export const Navbar: React.FC = () => {
 return (
  <nav className='navbar navbar-custom navbar-expand-lg navbar-dark fixed-top'>
   <NavLink className='navbar-brand' to='/'>
    <img
     src={LogoPizza}
     alt='pizza logo'
     css={css`
      width: 3.5rem;
      height: 3.5rem;
     `}
    />
   </NavLink>
   <button
    className='navbar-toggler'
    type='button'
    data-toggle='collapse'
    data-target='#navbarText'
    aria-controls='navbarText'
    aria-expanded='false'
    aria-label='Toggle navigation'
   >
    <i
     className='fa fa-navicon'
     css={css`
      color: ${theme.fifth_color};
      font-size: 2.5rem;
     `}
    ></i>
   </button>
   <div className='collapse navbar-collapse' id='navbarText'>
    <ul
     className='navbar-nav mr-auto'
     css={css`
      li {
       font-size: 1.5rem;
      }
     `}
    >
     <li className='nav-item'>
      <NavLink className='nav-link' to='/'>
       Home
      </NavLink>
     </li>
     <li className='nav-item'>
      <NavLink className='nav-link' to='/about'>
       About
      </NavLink>
     </li>
     <li className='nav-item'>
      <NavLink className='nav-link' to='/menu'>
       Menu
      </NavLink>
     </li>
     <li className='nav-item'>
      <NavLink className='nav-link' to='/book-table'>
       Book table
      </NavLink>
     </li>
     <li className='nav-item'>
      <NavLink className='nav-link' to='/order'>
       Order
      </NavLink>
     </li>
    </ul>
   </div>
  </nav>
 )
}
