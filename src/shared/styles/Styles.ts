import styled from "styled-components";
import { Primary } from "./colors";

export const Container =
  styled.div`
    background-color: ${Primary};
    opacity: 0.7;
    padding: 20px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: center;
    padding-left: 100px;
    padding-right: 100px;

    @media (max-width: 780px) {
      margin-top: -5px;
      padding-left: 15px;
      padding-right: 15px;
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
