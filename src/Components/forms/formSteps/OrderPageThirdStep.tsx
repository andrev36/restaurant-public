/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import loadingImage from '../../../assets/images/icons/pizza3.svg';
import styles from '../lastFormStep.module.scss';

export const OrderPageThirdStep = ({
 orderState,
 values,
 errors,
 touched,
 isSubmitting
}: any) => (
 <div>
  <main
   css={css`
    text-align: center;
   `}
  >
   <h2>Submitted data</h2>
   <section className={styles.last_form_step_section_wrapper}>
    <h5>
     Ordered food:
     {orderState.orderedFood
      ? orderState.orderedFood.map((item: any) => {
         return <p key={item.id}>{item.name.toString()}</p>;
        })
      : null}
    </h5>
    <h5>
     Email: <span>{values.email.toString()}</span>
    </h5>
    <h5>
     Phone <span>{values.phone.toString()}</span>
    </h5>
    <h5>
     Location: <span>{values.email.toString()}</span>
    </h5>
   </section>
   {!orderState.orderedFood.length ? (
    <div>
     <h5>Please order food to proceed.</h5>
    </div>
   ) : null}
   {errors.email ||
   !touched.email ||
   errors.phone ||
   !touched.phone ||
   errors.location ||
   !touched.location ? (
    <div>
     <h5>Please fill all form fields correctly.</h5>
    </div>
   ) : null}
   <div
    css={css`
     display: inline-block;
    `}
   >
    <button
     type='submit'
     className='btn-lg btn-primary '
     disabled={isSubmitting}
     css={css`
      text-align: center;
     `}
    >
     Submit
    </button>
    {isSubmitting ? (
     <img className={styles.loading_image} src={loadingImage} alt='loading' />
    ) : null}
   </div>
  </main>
 </div>
);
