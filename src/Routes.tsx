/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import PageNotFoundImage from './assets/images/error-2103590-0.svg'
import { AboutPage } from './pages/AboutPage'
import { BookTableFormPage } from './pages/BookTableFormPage'
import { MainPage } from './pages/MainPage'
import { MenuPage } from './pages/MenuPage'
import { OrderPage } from './pages/OrderPage'

const NotFound = ({ location }: RouteComponentProps<{}>) => {
 return (
  <main
   css={css`
    margin: 5rem auto;
    text-align: center;
    img {
     width: 20rem;
     height: 20rem;
    }
   `}
  >
   <h3>No match for {location.pathname}</h3>
   <div>
    <img src={PageNotFoundImage} alt='page not found' />
   </div>
  </main>
 )
}

export const Routes = () => {
 return (
  <React.Fragment>
   <Switch>
    <Route exact path='/' component={MainPage} />
    <Route exact path='/about' component={AboutPage} />
    <Route exact path='/menu' component={MenuPage} />
    <Route exact path='/book-table' component={BookTableFormPage} />
    <Route exact path='/first-step-book-table' component={BookTableFormPage} />
    <Route exact path='/second-step-book-table' component={BookTableFormPage} />
    <Route exact path='/third-step-book-table' component={BookTableFormPage} />
    <Route exact path='/order' component={OrderPage} />
    <Route exact path='/first-step-order' component={OrderPage} />
    <Route exact path='/second-step-order' component={OrderPage} />
    <Route exact path='/third-step-order' component={OrderPage} />
    <Route exact path='/fourth-step-order' component={OrderPage} />
    <Route component={NotFound} />
   </Switch>
  </React.Fragment>
 )
}
