/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import BookTableImage from '../../../assets/images/waiter-holding-tray-in-hotel.png'
import { DatePickerField } from '../DatePicker'
import { SelectNumberOfGuests } from '../SelectNumberOfGuests'
import { SelectTime } from '../SelectTime'

export const BookTableFirstStep: React.FC = () => (
 <main
  css={css`
   margin: 1rem 5vw;
  `}
 >
  <div
   css={css`
    text-align: center;
    img {
     width: 20rem;
     height: 20rem;
    }
   `}
  >
   <img src={BookTableImage} alt='book table' />
  </div>
  <section className='form-group'>
   <h5>Number of guests*</h5>
   <SelectNumberOfGuests name='guestNumber' />
  </section>
  <section className='form-group'>
   <h5>Date*</h5>
   <DatePickerField name='date' />
  </section>
  <section className='form-group'>
   <h5>Time*</h5>
   <SelectTime name='time' />
  </section>
 </main>
)
