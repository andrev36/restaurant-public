/** @jsx jsx */
import axios from 'axios'
import { Dispatch, Reducer, useReducer } from 'react'
import * as Yup from 'yup'
import { Item, Order } from './order.interface'

export const orderValidationSchema = Yup.object().shape({
 location: Yup.string().required(),
 phone: Yup.string().required(),
 email: Yup.string().email().required(),
})

export const OrderPageHook = () => {
 const orderBoxes: Order = {
  items: [
   {
    id: 0,
    name: 'Ham',
    type: 'food',
    imagePath: 'ham.svg',
   },
   {
    id: 1,
    name: 'Cheese',
    type: 'food',
    imagePath: 'cheese.svg',
   },
   {
    id: 2,
    name: 'Pineapple',
    type: 'food',
    imagePath: 'pineapple.svg',
   },
   {
    id: 3,
    name: 'Chicken',
    type: 'food',
    imagePath: 'chicken.svg',
   },
  ],
  orderedFood: [],
 }

 type OrderBoxesInitialState = typeof orderBoxes

 type OrderFoodActionTypes =
  | { type: 'ADD_TO_ORDER'; id: number }
  | { type: 'REMOVE_FROM_ORDER'; id: number }

 const orderFoodReducer = (
  orderBoxes: OrderBoxesInitialState,
  action: OrderFoodActionTypes,
 ) => {
  switch (action.type) {
   case 'ADD_TO_ORDER': {
    const addedItem = orderBoxes?.items.find(
     (item: Item) => item.id === action.id,
    )
    const existedItem = orderBoxes.orderedFood.find(
     (item: Item) => action.id === item.id,
    )
    if (existedItem) {
     return {
      ...orderBoxes,
     }
    } else {
     return {
      ...orderBoxes,
      orderedFood: [...orderBoxes.orderedFood, addedItem],
     }
    }
   }
   case 'REMOVE_FROM_ORDER': {
    const newItems = orderBoxes.orderedFood.filter(
     (item: Item) => action.id !== item.id,
    )
    return {
     ...orderBoxes,
     orderedFood: newItems,
    }
   }
   default:
    return orderBoxes
  }
 }

 const [orderState, dispatch]: [
  any,
  Dispatch<OrderFoodActionTypes>,
 ] = useReducer<Reducer<any, OrderFoodActionTypes>>(
  orderFoodReducer,
  orderBoxes,
 )

 const handleDrop = (item: Item) => {
  dispatch({ type: 'ADD_TO_ORDER', id: item.id })
 }

 const handleOrderRemove = (item: Item) => {
  dispatch({ type: 'REMOVE_FROM_ORDER', id: item.id })
 }

 const handleSubmit = async (
  values: { email: string; location: string; phone: string },
  actions: { setSubmitting(arg0: boolean): void },
 ) => {
  try {
   const { location, phone, email } = values
   const emailOrderedFood = orderState.orderedFood.map((item: Item) => {
    return `${item.name.toString()}
    `
   })
   await axios.post(`${process.env.REACT_APP_EMAIL_API_ENDPOINT}`, {
    to: email,
    from: 'wiadernyandrzej96@gmail.com',
    subject: 'Food Order Details',
    text: `Hello ${email}. Here are your food order details.
     Email: ${email}
     Location: ${location}
     Phone: ${phone}
     Ordered Food:
     ${emailOrderedFood}`,
   })
   actions.setSubmitting(false)
  } catch (error) {
   console.log('error :', error)
  }
 }
 return { handleDrop, handleOrderRemove, handleSubmit, orderState }
}
