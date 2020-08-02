/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { API, graphqlOperation } from 'aws-amplify';
import axios from 'axios';
import cx from 'classnames';
import { Formik } from 'formik';
import { Step, Steps, Wizard } from 'react-albus';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Yup from 'yup';
import Background from '../assets/images/pick_your_ingredients.jpeg';
import { BookTableProgressBar } from '../Components/forms/BookTableProgressBar';
import { BookTableFirstStep } from '../Components/forms/formSteps/BookTableFirstStep';
import { BookTableSecondStep } from '../Components/forms/formSteps/BookTableSecondStep';
import { BookTableThirdStep } from '../Components/forms/formSteps/BookTableThirdStep';
import styles from '../Components/forms/multiStepForm.module.scss';
import { MultiStepFormNavigation } from '../Components/forms/MultiStepFormNavigation';
import { createBookTable } from '../graphql/mutations';

export const bookTableValidationSchema = Yup.object().shape({
 email: Yup.string().email('email is not valid').required('email is required'),
 name: Yup.string().required('name is required'),
 date: Yup.string().required('date is required'),
 time: Yup.object().required('time is required'),
 message: Yup.string(),
 numberOfGuests: Yup.string().required('number of guests is required')
});

export const BookTableFormPage = () => {
 const handleSubmit = async (values: any, actions: any) => {
  try {
   const { name, email, date, time, message, numberOfGuests } = values;
   await axios.post(`${process.env.REACT_APP_EMAIL_API_ENDPOINT}`, {
    to: email,
    from: 'wiadernyandrzej96@gmail.com',
    subject: 'Table Booking Details',
    text: `Hello ${email}. Here are your food order details.
      Name: ${name}
      Email: ${email}
      Date: ${date.toDateString()}
      Time: ${time.value.toString()}
      Message: ${message}
      Number of guests: ${numberOfGuests}
     `
   });
   await API.graphql(
    graphqlOperation(createBookTable, {
     input: {
      name: name,
      email: email,
      date: date.toDateString(),
      time: time.value.toString(),
      message: message,
      numberOfGuests: numberOfGuests
     }
    })
   );
  } catch (error) {}
 };
 return (
  <div
   css={css`
    background-image: url(${Background});
   `}
  >
   <BrowserRouter>
    <Route
     render={({ history }) => (
      <Wizard
       history={history}
       render={({ step, steps }) => (
        <main className={cx(styles.multistep_form_wrapper, 'container')}>
         <BookTableProgressBar />
         <Formik
          initialValues={{
           name: 'John',
           email: 'example@gmail.com',
           date: new Date(),
           time: { value: '16:00', label: '16:00' },
           numberOfGuests: '1 person',
           message: ''
          }}
          validationSchema={bookTableValidationSchema}
          onSubmit={handleSubmit}
         >
          {({
           values,
           errors,
           touched,
           handleChange,
           handleBlur,
           handleSubmit,
           isSubmitting
          }) => (
           <form onSubmit={handleSubmit}>
            <Steps key={step.id} step={step}>
             <Step id='first-step-book-table'>
              <BookTableFirstStep />
             </Step>
             <Step id='second-step-book-table'>
              <BookTableSecondStep
               handleChange={handleChange}
               handleBlur={handleBlur}
               values={values}
               errors={isSubmitting}
               touched={isSubmitting}
               handleSubmit={isSubmitting}
               isSubmitting={isSubmitting}
              />
             </Step>
             <Step id='third-step-book-table'>
              <BookTableThirdStep
               isSubmitting={isSubmitting}
               values={values}
               errors={errors}
              />
             </Step>
            </Steps>
           </form>
          )}
         </Formik>
         <MultiStepFormNavigation />
        </main>
       )}
      />
     )}
    />
   </BrowserRouter>
  </div>
 );
};
