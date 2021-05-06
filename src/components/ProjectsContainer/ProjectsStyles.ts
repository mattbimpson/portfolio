import styled from 'styled-components';
import { Primary } from "../../shared/styles/colors";

export const Container =
  styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: repeat(2, 250px);
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 30px;

    @media (max-width: 780px) {
      margin-left: 0;
      margin-right: 0;
    }
  `;

interface TileContainerProps {
  opaque: boolean;
}

export const TileContainer =
  styled.div<TileContainerProps>`
    background-color: ${Primary};
    border-radius: 5px;
    text-align: center;
    color: white;
    padding: 20px;
    cursor: pointer;

    opacity: ${props => props.opaque ? 1 : 0.7};

    @media (max-width: 780px) {
      border-radius: 0;
    }
  `;

export const ImageContainer =
  styled.div`
    display: inline-table;
    height: 90px;
    width: 90px;
    background-color: white;
    border-radius: 50%;
`;
export const Image =
  styled.img`
    height: 70px;
    width: 70px;
    background-color: white;
    border-radius: 50%;
    margin-top: 8px;
  `;

export const TitleText =
  styled.p`
    font-weight: bold;
  `;