/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { useDrag } from 'react-dnd'
import CheeseIcon from '../../assets/images/icons/cheese.svg'
import ChickenIcon from '../../assets/images/icons/chicken.svg'
import HamIcon from '../../assets/images/icons/ham.svg'
import PineappleIcon from '../../assets/images/icons/pineapple.svg'
import styles from './dragAndDropIngredients.module.scss'

const OrderBoxIcons = [HamIcon, CheeseIcon, PineappleIcon, ChickenIcon]

export interface OrderBoxProps {
 name: string
 type: string
 id: number
 imagePath: string
}

export const OrderBox: React.FC<OrderBoxProps> = ({
 name,
 type,
 id,
 imagePath,
}) => {
 const [{ opacity }, drag] = useDrag({
  item: { id, name, type, imagePath },
  collect: (monitor) => ({
   opacity: monitor.isDragging() ? 0.4 : 1,
  }),
 })

 return (
  <div ref={drag} style={{ opacity }} className={styles.dnd_item}>
   <div>
    <img src={OrderBoxIcons[id]} alt={`${name} icon`} />
   </div>
   <div>
    <span>{name}</span>
   </div>
  </div>
 )
}
