/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerField = ({ ...props }: any) => {
 const { setFieldValue } = useFormikContext();
 const [field] = useField(props);
 return (
  <DatePicker
   {...field}
   {...props}
   selected={(field.value && new Date(field.value)) || null}
   onChange={(val) => {
    setFieldValue(field.name, val);
   }}
   css={css`
    width: 100%;
    border-radius: 5px;
    border: 1px rgba(0, 0, 0, 0.4) solid;
    padding: 5px;
    background-color: white;
   `}
  />
 );
};
