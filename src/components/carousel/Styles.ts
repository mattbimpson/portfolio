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
  `;

export const ItemContainer =
  styled.div`
    height: 300px;
    width: 300px;
    margin-left: 20px;
    color: white;
    font-weight: 500;
    outline: none;

    display: flex !important;
  `;

export const ImageContainer =
  styled.div`
    height: 250px;
    width: 250px;
    background-color: white;
    -webkit-clip-path: polygon(0 0, 0 250px, 250px 0, 250px 0);
    clip-path: polygon(0 0, 0 250px, 250px 0, 250px 0);
  `;
export const Image =
  styled.img`
    height: 250px;
    width: 250px;
  `;

export const TextContainer =
  styled.div`
    margin: 50px;
  `;