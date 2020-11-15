import styled from 'styled-components';
import { DarkRed } from '../../shared/styles/colors';
import { Link } from 'react-router-dom';

export const Container =
  styled.div`
    position: sticky;
    top: 0;
    background-color: ${DarkRed};
    display: flex;
  `;

export const Nav = styled.div`
  display: inline-flex;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  width: 800px;

  @media (max-width: 780px) {
    margin-left: 20px;
    margin-right: 0px;
    padding-left: 0;
  }
`;

export const RouterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 15px;
  font-weight: 500;
  font-size: 20px;
`;
