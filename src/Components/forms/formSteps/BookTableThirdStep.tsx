/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FormikErrors } from 'formik'
import loadingImage from '../../../assets/images/icons/pizza3.svg'
import styles from '../lastFormStep.module.scss'

interface Props {
 isSubmitting: boolean
 errors: FormikErrors<{ name: string; email: string }>
 values: {
  name: string
  email: string
  date: { toDateString(): React.ReactNode }
  time: { value: string }
  message?: string | null
  numberOfGuests: string
 }
}

export const BookTableThirdStep: React.FC<Props> = ({
 isSubmitting,
 values,
 errors,
}) => {
 return (
  <main
   css={css`
    text-align: center;
    margin: 1rem 0.2rem;
   `}
  >
   <h2>Submitted data</h2>
   <section className={styles.last_form_step_section_wrapper}>
    <h5>
     Number of guests:
     <span> {values.numberOfGuests.toString()}</span>
    </h5>
    <h5>
     Reservation Date: <span>{values.date.toDateString()}</span>
    </h5>
    <h5>
     Reservation time: <span>{values.time.value.toString()}</span>
    </h5>
    <h5>
     Name: <span>{values.name.toString()}</span>
    </h5>
    <h5>
     Message: <span>{values?.message?.toString()}</span>
    </h5>
    <h5>
     Email: <span>{values.email.toString()}</span>
    </h5>
   </section>
   {errors.email || errors.name ? (
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
    >
     Submit
    </button>
    {isSubmitting ? (
     <img className={styles.loading_image} src={loadingImage} alt='loading' />
    ) : null}
   </div>
  </main>
 )
}
