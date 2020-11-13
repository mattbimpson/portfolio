import styled from 'styled-components';
import { DarkRed } from '../shared/styles/colors';

export const Container =
  styled.div`
    position: sticky;
    top: 0;
    background-color: ${DarkRed};
  `;

export const Nav = styled.div`
  display: inline-flex;
  margin-left: 200px;
  margin-right: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 15px;
  font-weight: 500;
  font-size: 20px;
`;
