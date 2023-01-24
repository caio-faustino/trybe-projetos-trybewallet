import React from 'react';
import { screen } from '@testing-library/react';
import Header from '../components/Header';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockInput from './helpers/mockInput';

describe('Componente Header.js sendo testado', () => {
  beforeEach(() => renderWithRouterAndRedux(<Header email="test@test.com" expenses={ mockInput } />));

  test('Renderizar Head', () => {
    const boxEmail = screen.getByTestId('email-field');
    const boxCurrency = screen.getByTestId('header-currency-field');
    const boxTotal = screen.getByTestId('total-field');
    const box = [boxEmail, boxTotal, boxCurrency];
    box.forEach((field) => expect(field).toBeInTheDocument());
  });

  test('box valor zerado', () => {
    const boxTotal = screen.getByTestId('total-field');
    expect(boxTotal).toHaveTextContent('0.00');
  });

  test('Moeda BRL', () => {
    const boxCurrency = screen.getByTestId('header-currency-field');
    expect(boxCurrency).toHaveTextContent('BRL');
  });
});
