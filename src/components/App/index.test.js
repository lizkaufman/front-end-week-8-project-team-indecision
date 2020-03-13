import React from 'react';
import { render, unmountComponentAtNode } from '@testing-library/react';
import App from './index';
import Form from '../Form/index';
import Impact from '../Impact/index';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders Form in App', () => {
  act(() => {
    render(<Form />, container);
  });
  expect(container.querySelector(`[data-testid='form']`)).toBeInTheDocument();
});

it('renders Impact section in App', () => {
  act(() => {
    render(<Impact />, container);
  });
  expect(container.querySelector(`[data-testid='impact']`)).toBeInTheDocument();
});
