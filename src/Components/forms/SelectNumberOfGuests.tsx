import { useField, useFormikContext } from 'formik'
import React from 'react'
import Select from 'react-select'

const options: { value: string; label: string }[] = [
 { value: '1', label: '1 person' },
 { value: '2', label: '2 person' },
 { value: '3', label: '3 person' },
 { value: '4', label: '4 person' },
 { value: '5', label: '5 person' },
 { value: 'more than 5 persons', label: 'more than 5 persons' },
]

export const SelectNumberOfGuests: React.FC<{ name: string }> = ({ name }) => {
 const { setFieldValue } = useFormikContext()
 const [field] = useField(name)
 return (
  <React.Fragment>
   <Select
    defaultValue={options[1].label}
    options={options}
    {...field}
    name={name}
    onChange={(val) => {
     setFieldValue(field.name, val)
    }}
    value={field.value || null}
   />
  </React.Fragment>
 )
}
