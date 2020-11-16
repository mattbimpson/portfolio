import styled from "styled-components";
import { Primary } from "./colors";

export const Container =
  styled.div`
    background-color: ${Primary};
    padding: 20px;
    width: 800px;
    margin: 0 auto;
    margin-top: 30px;
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
