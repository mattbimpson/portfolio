import styled from "styled-components";

export const Container =
  styled.div`
    height: 400px;
    width: 800px;
    margin: 0 auto;
    margin-top: 50px;
  `;

export const CarouselContainer =
  styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
  `;

export interface ItemContainerProps {
  selected?: boolean;
}
export const ItemContainer =
  styled.div<ItemContainerProps>`
    height: ${(props) => (props.selected ? '250px' : '200px')};
    width: ${(props) => (props.selected ? '300px' : '250px')};
    background-color: ${(props) => (props.selected ? 'white' : 'rgba(0, 0, 0, 0.7)')};
  `;
