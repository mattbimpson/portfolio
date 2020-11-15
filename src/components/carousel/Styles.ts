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
    padding: 20px;
  `;

export const ItemContainer =
  styled.div`
    height: 200px;
    width: 300px;
    padding: 20px;
    margin-left: 20px;
    color: white;
    font-weight: 500;
    outline: none;
  `;

export const ImageContainer =
  styled.div`
    height: 100px;
    width: 100px;
    background-color: white;
    -webkit-clip-path: polygon(0 0, 0 100px, 100px 0, 100px 0);
    clip-path: polygon(0 0, 0 100px, 100px 0, 100px 0);
  `;
export const Image =
  styled.img`
    height: 80px;
    width: 80px;
  `;
