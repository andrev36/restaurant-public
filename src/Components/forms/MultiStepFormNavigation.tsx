import React from 'react';
import { WithWizard } from 'react-albus';
import './multiStepNavigation.scss';

export const MultiStepFormNavigation = () => (
 <WithWizard
  render={({ next, previous, step, steps }) => (
   <header className='example_buttons'>
    {steps.indexOf(step) < steps.length - 1 && (
     <button className='btn-lg btn-secondary' onClick={next}>
      Next
     </button>
    )}
    {steps.indexOf(step) > 0 && (
     <button className='btn-lg btn-secondary' onClick={previous}>
      Back
     </button>
    )}
   </header>
  )}
 />
);
