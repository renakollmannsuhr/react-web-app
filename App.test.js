import { render, screen } from '@testing-library/react';
import App from './App';

describe('trial-test',()=> {
  test('trial truth', () => {
    render(<App/>);
    expect(true).toBe(true);
  });
});

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});

