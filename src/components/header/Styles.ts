import styled from 'styled-components';
import { Primary } from '../../shared/styles/colors';
import { Link } from 'react-router-dom';

export const Container =
  styled.div`
    position: sticky;
    top: 0;
    background-color: ${Primary};
    display: flex;
    z-index: 9999;
  `;

export const Nav = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  text-align: center;
`;

export const RouterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 15px;
  font-weight: 500;
  font-size: 20px;
`;
