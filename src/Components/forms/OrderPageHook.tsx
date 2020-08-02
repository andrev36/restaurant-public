/** @jsx jsx */
import axios from 'axios';
import { useReducer } from 'react';
import * as Yup from 'yup';
import { IngredientsTypes } from './IngredientTypes';

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
 location: Yup.string().required(),
 phone: Yup.string().required(),
 email: Yup.string().email().required()
});

export const OrderPageHook = () => {
 const orderBoxes: any = {
  items: [
   {
    id: 0,
    name: 'Ham',
    type: IngredientsTypes.FOOD,
    imagePath: 'ham.svg'
   },
   {
    id: 1,
    name: 'Cheese',
    type: IngredientsTypes.FOOD,
    imagePath: 'cheese.svg'
   },
   {
    id: 2,
    name: 'Pineapple',
    type: IngredientsTypes.FOOD,
    imagePath: 'pineapple.svg'
   },
   {
    id: 3,
    name: 'Chicken',
    type: IngredientsTypes.FOOD,
    imagePath: 'chicken.svg'
   }
  ],
  orderedFood: []
 };

 const orderFoodReducer = (orderBoxes: any, action: any) => {
  switch (action.type) {
   case 'ADD_TO_ORDER': {
    let addedItem = orderBoxes.items.find((item: any) => item.id === action.id);
    let existed_item = orderBoxes.orderedFood.find(
     (item: any) => action.id === item.id
    );
    if (existed_item) {
     return {
      ...orderBoxes
     };
    } else {
     return {
      ...orderBoxes,
      orderedFood: [...orderBoxes.orderedFood, addedItem]
     };
    }
   }
   case 'REMOVE_FROM_ORDER': {
    let new_items = orderBoxes.orderedFood.filter(
     (item: any) => action.id !== item.id
    );
    return {
     ...orderBoxes,
     orderedFood: new_items
    };
   }
   default:
    return orderBoxes;
  }
 };

 const [orderState, dispatch] = useReducer(orderFoodReducer, orderBoxes);

 const handleDrop = (item: any) => {
  dispatch({ type: 'ADD_TO_ORDER', id: item.id });
 };

 const handleOrderRemove = (item: any) => {
  dispatch({ type: 'REMOVE_FROM_ORDER', id: item.id });
 };

 const handleSubmit = async (values: any, actions: any) => {
  try {
   const { location, phone, email } = values;
   let emailOrderedFood = orderState.orderedFood.map((item: any) => {
    return `${item.name.toString()}
    `;
   });
   await axios.post(`${process.env.REACT_APP_EMAIL_API_ENDPOINT}`, {
    to: email,
    from: 'wiadernyandrzej96@gmail.com',
    subject: 'Food Order Details',
    text: `Hello ${email}. Here are your food order details.
      Email: ${email}
      Location: ${location}
      Phone: ${phone}
      Ordered Food:
      ${emailOrderedFood}`
   });
  } catch (error) {
   console.log('error :', error);
  }
 };
 return { handleDrop, handleOrderRemove, handleSubmit, orderState };
};
