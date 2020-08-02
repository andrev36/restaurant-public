/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import cx from 'classnames';
import { Formik } from 'formik';
import React from 'react';
import { Step, Steps, Wizard } from 'react-albus';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Yup from 'yup';
import Background from '../assets/images/pick_your_ingredients.jpeg';
import { OrderPageFirstStep } from '../Components/forms/formSteps/OrderPageFirstStep';
import { OrderPageSecondStep } from '../Components/forms/formSteps/OrderPageSecondStep';
import { OrderPageThirdStep } from '../Components/forms/formSteps/OrderPageThirdStep';
import styles from '../Components/forms/multiStepForm.module.scss';
import { MultiStepFormNavigation } from '../Components/forms/MultiStepFormNavigation';
import { OrderPageHook } from '../Components/forms/OrderPageHook';
import { OrderProgressBar } from '../Components/forms/OrderProgressBar';

interface Props {
 history?: any;
 _id?: any;
}

export interface OrderBoxTargetSpec {
 accepts: string[];
 orderBoxTargets?: any;
}

export interface OrderBoxSpec {
 name: string;
 type: string;
 id: number;
 imagePath: string;
}

export interface ContainerState {
 droppedOrderBoxNames: string[];
 orderBoxTargets: OrderBoxTargetSpec[];
 orderBoxes: OrderBoxSpec[];
 orderedFood: any;
}

export const orderValidationSchema = Yup.object().shape({
 location: Yup.string().required('location is required'),
 phone: Yup.string().required('phone is required'),
 email: Yup.string().email('insert valid email').required('email is required')
});

export const OrderPage: React.FC<Props> = () => {
 const {
  handleDrop,
  handleOrderRemove,
  handleSubmit,
  orderState
 } = OrderPageHook();
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
        <div className={cx(styles.multistep_form_wrapper, 'container')}>
         <OrderProgressBar />
         <Formik
          initialValues={{
           location: '',
           phone: '',
           email: ''
          }}
          validationSchema={orderValidationSchema}
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
             <Step id='first-step-order'>
              <OrderPageFirstStep
               orderState={orderState}
               handleDrop={(item: any) => handleDrop(item)}
               handleOrderRemove={(item: any) => handleOrderRemove(item)}
              />
             </Step>
             <Step id='second-step-order'>
              <OrderPageSecondStep
               handleChange={handleChange}
               values={values}
               handleBlur={handleBlur}
               touched={touched}
               errors={errors}
              />
             </Step>
             <Step id='third-step-order'>
              <OrderPageThirdStep
               orderState={orderState}
               values={values}
               errors={errors}
               touched={touched}
               isSubmitting={isSubmitting}
              />
             </Step>
            </Steps>
           </form>
          )}
         </Formik>
         <MultiStepFormNavigation />
        </div>
       )}
      />
     )}
    />
   </BrowserRouter>
  </div>
 );
};
