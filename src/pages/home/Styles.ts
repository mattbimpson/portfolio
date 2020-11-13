import styled from 'styled-components';

export const Container =
  styled.div`
    background-color: rgba(0, 0, 0, 0.7);
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
    color: rgba(255, 255, 255, 1);
  `;

export const HeaderText =
  styled(Text)`
    font-size: 24px;
    font-weight: bold;
  `;

export const ChipContainer =
    styled(Container)`
      display: flex;
      justify-content: space-between;
    `;
