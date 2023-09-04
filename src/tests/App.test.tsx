import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

test('renders text in home component', () => {
  render(
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  );
  const linkElement = screen.getByText('matt bimpson');
  expect(linkElement).toBeInTheDocument();
});
