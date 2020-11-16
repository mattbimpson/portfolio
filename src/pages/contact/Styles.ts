import styled from 'styled-components';
import { Primary } from '../../shared/styles/colors';

export const Container =
  styled.div`
    background-color: ${Primary};
    padding: 20px;
    width: 800px;
    margin: 0 auto;
    margin-top: 50px;
    box-sizing: border-box;

    @media (max-width: 780px) {
      width: 100%;
      margin-top: 0px;
    }
  `;

export const Text =
  styled.p`
    color: white;
    font-weight: 500;
  `;

export const HeaderText =
  styled(Text)`
    font-size: 24px;
    font-weight: bold;
  `;

export const List =
    styled.ul`
      color: white;
      font-weight: 500;
      list-style: none;
      padding: 0;
      cursor: pointer;
    `;