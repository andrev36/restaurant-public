/** @jsx jsx */
import { jsx } from '@emotion/core'
import ArrowIcon from '../../assets/images/icons/arrow_1.svg'
import styles from './dragAndDropIngredients.module.scss'
import { Item, Order } from './order.interface'
import { OrderBox } from './OrderBox'
import { OrderBoxTarget } from './OrderBoxTarget'

interface Props {
 orderState: Order
 handleDrop(item: Item): void
 handleOrderRemove(item: Item): void
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE OrderBox is a food type product which can be dragged to
* OrderBoxTarget (container). Product is then added to
* order state.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
export const DragAndDropFood: React.FC<Props> = ({
 orderState,
 handleOrderRemove,
 handleDrop,
}) => {
 return (
  <main className={styles.wrapper}>
   <section className={styles.dnd_container}>
    <h2>INGREDIENTS</h2>
    {orderState.items.map(
     ({ id, name, type, imagePath }: Item, index: number) => (
      <OrderBox
       id={id}
       name={name}
       type={type}
       imagePath={imagePath}
       key={index}
      />
     ),
    )}
   </section>
   <section className={styles.dnd_navigation_helper_arrow}>
    <h2>DRAG</h2>
    <img src={ArrowIcon} alt='arrow icon right' />
   </section>
   <section>
    <OrderBoxTarget
     accept={['food']}
     orderedFood={orderState.orderedFood}
     handleOrderRemove={handleOrderRemove}
     handleDrop={handleDrop}
    />
   </section>
  </main>
 )
}
