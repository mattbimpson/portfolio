import styled from 'styled-components';

export const Container =
	styled.div`
    height: 800px;
    margin-left: 200px;
    margin-right: 200px;

    @media (max-width: 780px) {
      margin: 0px;
    }

    .fade-enter {
      opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
  `;
