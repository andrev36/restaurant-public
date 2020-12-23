/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { StepObject, WithWizard } from 'react-albus'
import styles from './progressBar.module.scss'

export const OrderProgressBar: React.FC = () => {
 const OrderSteps = (steps: StepObject[], step: StepObject) => {
  if (steps.indexOf(step) === 0) {
   return (
    <React.Fragment>
     <li className={styles.active}>Food</li>
     <li>Client Details</li>
     <li>Summary</li>
    </React.Fragment>
   )
  } else if (steps.indexOf(step) === 1) {
   return (
    <React.Fragment>
     <li className={styles.active}>Food</li>
     <li className={styles.active}>Client Details</li>
     <li>Summary</li>
    </React.Fragment>
   )
  } else if (steps.indexOf(step) === 2) {
   return (
    <React.Fragment>
     <li className={styles.active}>Food</li>
     <li className={styles.active}>Client Details</li>
     <li className={styles.active}>Summary</li>
    </React.Fragment>
   )
  }
 }
 return (
  <WithWizard
   render={({ step, steps }) => (
    <div className={styles.msform}>
     <ul className={styles.progressbar}>{OrderSteps(steps, step)}</ul>
    </div>
   )}
  />
 )
}
