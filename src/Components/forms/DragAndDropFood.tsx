/** @jsx jsx */
import { jsx } from '@emotion/core';
import ArrowIcon from '../../assets/images/icons/arrow_1.svg';
import styles from './dragAndDropIngredients.module.scss';
import { IngredientsTypes } from './IngredientTypes';
import { OrderBox } from './OrderBox';
import { OrderBoxTarget } from './OrderBoxTarget';

interface Props {
 orderState: any;
 handleOrderRemove: (item: any) => void;
 handleDrop: (item: any) => void;
}

export const DragAndDropFood = ({
 orderState,
 handleOrderRemove,
 handleDrop
}: Props) => {
 return (
  <main className={styles.wrapper}>
   <section className={styles.dnd_container}>
    <h2>INGREDIENTS</h2>
    {orderState.items.map(({ id, name, type, imagePath }: any, index: any) => (
     <OrderBox
      id={id}
      name={name}
      type={type}
      imagePath={imagePath}
      key={index}
     />
    ))}
   </section>
   <section className={styles.dnd_navigation_helper_arrow}>
    <h2>DRAG</h2>
    <img src={ArrowIcon} alt='arrow icon right' />
   </section>
   <section>
    <OrderBoxTarget
     accept={[IngredientsTypes.FOOD]}
     orderedFood={orderState.orderedFood}
     handleOrderRemove={handleOrderRemove}
     handleDrop={handleDrop}
    />
   </section>
  </main>
 );
};
