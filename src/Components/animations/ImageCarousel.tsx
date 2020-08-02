/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import SharingPizzaPicture from '../../assets/images/sharing_pizza.jpeg';

export const ImageCarousel = () => (
 <section
  className='container-fluid'
  css={css`
   overflow: hidden;
  `}
 >
  <div className='row'>
   <div id='carousel' className='carousel slide' data-ride='carousel'>
    <ol className='carousel-indicators'>
     <li data-target='#carousel' data-slide-to='0' className='active'></li>
     <li data-target='#carousel' data-slide-to='1'></li>
    </ol>
    <div>
     <div className='carousel-item active'>
      <div className='d-none d-lg-block'>
       <div
        className='slide-box'
        css={css`
         img {
          height: 410px;
         }
        `}
       >
        <img
         src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`}
         // src={SharingPizzaPicture}
         alt='first slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/garden_delivery.jpeg`}
         // src={GardenDeliveryPicture}
         alt='second slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/dining_table_person.jpeg`}
         // src={DiningTablePersonPicture}
         alt='third slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`}
         // src={SharingPizzaPicture}
         alt='fourth slide'
        />
       </div>
      </div>
      <div className='d-none d-md-block d-lg-none'>
       <div
        className='slide-box'
        css={css`
         img {
          height: 410px;
         }
        `}
       >
        <img
         src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`}
         // src={SharingPizzaPicture}
         alt='first slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/garden_delivery.jpeg`}
         // src={GardenDeliveryPicture}
         alt='second slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/dining_table_person.jpeg`}
         // src={DiningTablePersonPicture}
         alt='third slide'
        />
       </div>
      </div>
      <div className='d-none d-sm-block d-md-none'>
       <div
        className='slide-box'
        css={css`
         img {
          height: 410px;
         }
        `}
       >
        <img
         src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`}
         // src={SharingPizzaPicture}
         alt='first slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/garden_delivery.jpeg`}
         // src={GardenDeliveryPicture}
         alt='second slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/dining_table_person.jpeg`}
         // src={DiningTablePersonPicture}
         alt='third slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`}
         // src={SharingPizzaPicture}
         alt='fourth slide'
        />
       </div>
      </div>
      <div
       className='d-block d-sm-none'
       css={css`
        img {
         height: 410px;
        }
       `}
      >
       <img
        src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`}
        // src={SharingPizzaPicture}
        alt='first slide'
       />
      </div>
     </div>
     <div className='carousel-item'>
      <div className='d-none d-lg-block'>
       <div
        className='slide-box'
        css={css`
         img {
          height: 410px;
         }
        `}
       >
        <img
         src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`}
         // src={SharingPizzaPicture}
         alt='first slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/garden_delivery.jpeg`}
         // src={GardenDeliveryPicture}
         alt='second slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/dining_table_person.jpeg`}
         // src={DiningTablePersonPicture}
         alt='third slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`}
         // src={SharingPizzaPicture}
         alt='fourth slide'
        />
       </div>
      </div>
      <div className='d-none d-md-block d-lg-none'>
       <div
        className='slide-box'
        css={css`
         img {
          height: 410px;
         }
        `}
       >
        <img
         src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`}
         // src={SharingPizzaPicture}
         alt='first slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/garden_delivery.jpeg`}
         // src={GardenDeliveryPicture}
         alt='second slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/dining_table_person.jpeg`}
         // src={DiningTablePersonPicture}
         alt='third slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`}
         // src={SharingPizzaPicture}
         alt='fourth slide'
        />
       </div>
      </div>
      <div className='d-none d-sm-block d-md-none'>
       <div
        className='slide-box'
        css={css`
         img {
          height: 410px;
          width: 100%;
         }
        `}
       >
        <img
         src={`${process.env.REACT_APP_S3_URL}/sharing_pizza.jpeg`}
         // src={SharingPizzaPicture}
         alt='first slide'
        />
        <img
         src={`${process.env.REACT_APP_S3_URL}/garden_delivery.jpeg`}
         // src={GardenDeliveryPicture}
         alt='second slide'
        />
       </div>
      </div>
      <div
       className='d-block d-sm-none'
       css={css`
        img {
         height: 410px;
         width: 100%;
        }
       `}
      >
       <img
        className='d-block w-100'
        src={SharingPizzaPicture}
        alt='first slide'
       />
      </div>
     </div>
    </div>
    <a
     className='carousel-control-prev'
     href='#carousel'
     role='button'
     data-slide='prev'
    >
     <span className='carousel-control-prev-icon' aria-hidden='true'></span>
     <span className='sr-only'>Previous</span>
    </a>
    <a
     className='carousel-control-next'
     href='#carousel'
     role='button'
     data-slide='next'
    >
     <span className='carousel-control-next-icon' aria-hidden='true'></span>
     <span className='sr-only'>Next</span>
    </a>
   </div>
  </div>
 </section>
);
