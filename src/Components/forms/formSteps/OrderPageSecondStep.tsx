/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FormikErrors, FormikTouched } from 'formik'
import { ChangeEvent, FocusEvent } from 'react'

interface Props {
 handleChange(e: ChangeEvent): void
 values: { email: string; phone: string; location: string }
 handleBlur(e: FocusEvent): void
 touched: FormikTouched<{ email: string; phone: string; location: string }>
 errors: FormikErrors<{ email: string; phone: string; location: string }>
}

export const OrderPageSecondStep: React.FC<Props> = ({
 handleChange,
 values,
 handleBlur,
 touched,
 errors,
}) => (
 <main
  css={css`
   margin: 1rem 5vw;
  `}
 >
  <div className='form-group'>
   <h5>
    <label>Email*</label>
   </h5>
   <input
    type='text'
    className='form-control'
    id='email'
    placeholder='Email'
    onChange={handleChange}
    value={values.email}
    onBlur={handleBlur}
   />
   {touched.email && errors.email && <div>{errors.email}</div>}
  </div>
  <div className='form-group'>
   <h5>
    <label>Phone*</label>
   </h5>
   <input
    type='text'
    className='form-control'
    id='phone'
    placeholder='Phone'
    onChange={handleChange}
    value={values.phone}
    onBlur={handleBlur}
   />
   {touched.phone && errors.phone && <div>{errors.phone}</div>}
  </div>
  <div className='form-group'>
   <h5>
    <label>Location*</label>
   </h5>
   <input
    type='text'
    className='form-control'
    id='location'
    placeholder='Location'
    onChange={handleChange}
    value={values.location}
    onBlur={handleBlur}
   />
   {touched.location && errors.location && <div>{errors.location}</div>}
  </div>
 </main>
)
