/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { useMedia } from 'react-use'
import VisibilitySensor from 'react-visibility-sensor'

interface Props {
 isVisible?: boolean
 children: React.ReactNode
 side?: string
}

const FadeInSide: React.FC<Props> = ({ isVisible, children, side }) => {
 const isWide = useMedia('(min-width: 500px) ')
 let firstTranslateValue = ''
 let secondTranslateValue = ''
 switch (side) {
  case 'leftSide':
   firstTranslateValue = 'translateX(0)'
   secondTranslateValue = 'translateX(-50px)'
   break
  case 'topSide':
   firstTranslateValue = 'translateY(0)'
   secondTranslateValue = 'translateY(-50px)'
   break
  case 'bottomSide':
   firstTranslateValue = 'translateY(0)'
   secondTranslateValue = 'translateY(50px)'
   break
  default:
   firstTranslateValue = 'translateX(0)'
   secondTranslateValue = 'translateX(50px)'
   break
 }
 const props = useSpring({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? `${firstTranslateValue}` : `${secondTranslateValue}`,
 })
 const propsMobile = useSpring({
  opacity: isVisible ? 1 : 0,
 })
 if (isWide) {
  return <animated.div style={props}>{children}</animated.div>
 } else {
  return <animated.div style={propsMobile}>{children}</animated.div>
 }
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Component which animates children after they are showed
* after user scrolls down the page.
* Animation side depends on provided 'side' string prop
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const FadeInContainer: React.FC<Props> = ({ children, side }) => {
 const [isVisible, setVisibility] = useState<boolean>(false)
 const onChange = (visibility: boolean) => {
  visibility && setVisibility(visibility)
 }
 return (
  <VisibilitySensor onChange={onChange}>
   <FadeInSide isVisible={isVisible} side={side}>
    {children}
   </FadeInSide>
  </VisibilitySensor>
 )
}
