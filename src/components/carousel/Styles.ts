import styled from "styled-components";
import { Primary } from "../../shared/styles/colors";

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
    color: white;
    font-weight: 500;
    outline: none;
    display: flex !important;
  `;

export const ImageContainer =
  styled.div`
    display: inline-table;
    height: 250px;
    width: 250px;
    background-color: white;
    -webkit-clip-path: polygon(0 0, 0 250px, 250px 0, 250px 0);
    clip-path: polygon(0 0, 0 250px, 250px 0, 250px 0);

    @media screen and (max-width: 780px) {
      height: 100px;
      width: 100px;
      -webkit-clip-path: polygon(0 0, 0 100px, 100px 0, 100px 0);
      clip-path: polygon(0 0, 0 100px, 100px 0, 100px 0);
    }
  `;
export const Image =
  styled.img`
    height: 150px;
    width: 150px;

    @media screen and (max-width: 780px) {
      height: 70px;
      width: 70px;
    }
  `;

export const TextContainer =
  styled.div`
    margin: 50px;

    @media screen and (max-width: 780px) {
      margin: 10px;
    }
  `;

export const LinkButton =
  styled.button`
    height: 45px;
    margin-top: 30px;
    padding: 10px;
    cursor: pointer;
    outline: none;
    color: ${Primary};
    background-color: white;
    font-weight: 500;
  `;