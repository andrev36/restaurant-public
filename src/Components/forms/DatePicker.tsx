/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useField, useFormikContext } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const DatePickerField: React.FC<{ name: string }> = ({ name }) => {
 const { setFieldValue } = useFormikContext()
 const [field] = useField(name)
 return (
  <DatePicker
   {...field}
   name={name}
   selected={(field.value && new Date(field.value)) || null}
   onChange={(val) => {
    setFieldValue(field.name, val)
   }}
   css={css`
    width: 100%;
    border-radius: 5px;
    border: 1px rgba(0, 0, 0, 0.4) solid;
    padding: 5px;
    background-color: white;
   `}
  />
 )
}
