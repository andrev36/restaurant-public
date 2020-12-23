/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { FadeInContainer } from './animations/FadeInContainer'
import './imageAspectRatio.scss'

interface Props {
 src?: string
 aspectRatio?: string
 alt?: string
 side?: string
 imageClassName?: string
 notAnimated?: boolean
}

export const ImageAspectRatio: React.FC<Props> = ({
 src,
 aspectRatio,
 alt,
 side,
 notAnimated,
 imageClassName,
}) => {
 return (
  <React.Fragment>
   {aspectRatio ? (
    <div className={`image-aspect-ratio img-ratio-${aspectRatio}`}>
     {notAnimated ? (
      <figure className='inner'>
       <img src={src} alt={alt} className={imageClassName} />
      </figure>
     ) : (
      <FadeInContainer side={side}>
       <figure className='inner'>
        <img src={src} alt={alt} className={imageClassName} />
       </figure>
      </FadeInContainer>
     )}
    </div>
   ) : (
    <div className={`image-aspect-ratio img-ratio-1-1`}>
     {notAnimated ? (
      <figure className='inner'>
       <img src={src} alt={alt} className={imageClassName} />
      </figure>
     ) : (
      <FadeInContainer side={side}>
       <figure className='inner'>
        <img src={src} alt={alt} className={imageClassName} />
       </figure>
      </FadeInContainer>
     )}
    </div>
   )}
  </React.Fragment>
 )
}
