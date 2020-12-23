/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { DragAndDropFood } from '../DragAndDropFood'
import { Item, Order } from '../order.interface'

interface Props {
 orderState: Order
 handleDrop(item: Item): void
 handleOrderRemove(item: Item): void
}

export const OrderPageFirstStep: React.FC<Props> = ({
 orderState,
 handleDrop,
 handleOrderRemove,
}) => {
 return (
  <div
   css={css`
    display: flex;
    align-items: center;
   `}
  >
   <DragAndDropFood
    orderState={orderState}
    handleDrop={handleDrop}
    handleOrderRemove={handleOrderRemove}
   />
  </div>
 )
}
