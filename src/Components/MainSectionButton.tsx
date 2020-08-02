/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import containerStyle from '../styles/containers.module.scss';
import { FadeInContainer } from './animations/FadeInContainer';
import buttonStyle from './mainSectionButton.module.scss';

interface Props {
 icon?: string;
 children?: any;
 linkTo?: any;
 alt?: string;
 animationSide?: string;
 secondary?: boolean;
 textColor?: string;
}

export const MainSectionButton = ({
 icon,
 children,
 linkTo,
 alt,
 animationSide,
 secondary,
 textColor
}: Props) => {
 return (
  <div className={buttonStyle.main_section_button_wrapper}>
   <Link to={linkTo}>
    <button
     className={
      secondary ? `btn btn-lg btn-secondary` : `btn btn-lg btn-primary`
     }
    >
     <FadeInContainer side={animationSide}>
      <div className={containerStyle.align_center_container}>
       <img
        src={icon}
        alt={alt}
        className={buttonStyle.main_section_button_icon}
       />
       <span
        css={css`
         color: ${textColor};
        `}
       >
        {children}
       </span>
      </div>
     </FadeInContainer>
    </button>
   </Link>
  </div>
 );
};
