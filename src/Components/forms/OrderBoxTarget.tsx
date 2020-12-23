/** @jsx jsx */
import { jsx } from '@emotion/core'
import cx from 'classnames'
import React from 'react'
import { useDrop } from 'react-dnd'
import CheeseIcon from '../../assets/images/icons/cheese.svg'
import ChickenIcon from '../../assets/images/icons/chicken.svg'
import HamIcon from '../../assets/images/icons/ham.svg'
import PineappleIcon from '../../assets/images/icons/pineapple.svg'
import styles from './dragAndDropIngredients.module.scss'
import { Item } from './order.interface'

const OrderBoxIcons = [HamIcon, CheeseIcon, PineappleIcon, ChickenIcon]

export interface OrderBoxTargetProps {
 accept: string[]
 orderedFood: []
 handleOrderRemove(item: Item): void
 handleDrop(item: Item): void
}

export const OrderBoxTarget: React.FC<OrderBoxTargetProps> = ({
 accept,
 orderedFood,
 handleOrderRemove,
 handleDrop,
}) => {
 const [{ isOver, canDrop }, drop] = useDrop({
  accept,
  drop: handleDrop,
  collect: (monitor) => ({
   isOver: monitor.isOver(),
   canDrop: monitor.canDrop(),
  }),
 })

 const isActive = isOver && canDrop

 return (
  <div ref={drop} className={styles.dnd_container}>
   {isActive ? (
    <h2>Release to drop</h2>
   ) : (
    <h2>PICK {accept.join(', ').toUpperCase()}</h2>
   )}
   {orderedFood
    ? orderedFood.map((item: Item, key: number) => (
       <div key={key} className={styles.dnd_item}>
        <div>
         <img
          src={OrderBoxIcons[item.id]}
          alt={`${item.imagePath.slice(0, -4)} icon`}
         />
        </div>
        <div>
         <span>{JSON.stringify(item.name).replace(/"/g, '')}</span>
        </div>
        <div>
         <button
          className={cx(styles.dnd_close_button, 'btn')}
          onClick={() => handleOrderRemove(item)}
         >
          X
         </button>
        </div>
       </div>
      ))
    : null}
  </div>
 )
}
