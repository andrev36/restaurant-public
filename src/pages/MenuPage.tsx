/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import cx from 'classnames'
import { PageWrapper } from '.'
import { ScrollTopArrow } from '../Components/ScrollTopArrow'
import { MenuNavigation } from '../pageSections/MenuNavigationSection'
import { Menu } from '../pageSections/MenuSection'
import containerStyles from '../styles/containers.module.scss'
import textStyles from '../styles/text.module.scss'

export const MenuPage: React.FC = () => {
 return (
  <PageWrapper>
   <div
    className={cx(containerStyles.container_large, 'container')}
    css={css`
     margin-top: 5rem;
    `}
   >
    <h1
     css={css`
      font-size: 4rem;
     `}
    >
     MENU
    </h1>
    <p className={textStyles.text}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
     tempore?
    </p>
    <MenuNavigation />
    <Menu />
   </div>
   <ScrollTopArrow />
  </PageWrapper>
 )
}
