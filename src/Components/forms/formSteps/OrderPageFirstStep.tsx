/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { DragAndDropFood } from '../DragAndDropFood';

export const OrderPageFirstStep = ({
 orderState,
 handleDrop,
 handleOrderRemove
}: any) => {
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
 );
};
