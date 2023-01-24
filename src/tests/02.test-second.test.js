import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WalletForm from '../components/WalletForm';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockData from './helpers/mockData';

describe('Componente Wallet.js sendo testado', () => {
  test('box dev valor renderizada na tela', () => {
    renderWithRouterAndRedux(<WalletForm currencies={ mockData } />);
    const boxMethod = screen.getByTestId('method-input');
    const boxTag = screen.getByTestId('tag-input');
    const boxValue = screen.getByTestId('value-input');
    const boxDescription = screen.getByTestId('description-input');
    const boxCurrency = screen.getByTestId('currency-input');
    const box = [boxValue, boxDescription, boxCurrency, boxMethod, boxTag];
    box.forEach((input) => expect(input).toBeInTheDocument());
    expect(boxValue).toHaveValue(0);
    userEvent.type(boxValue, '2');
    expect(boxValue).toHaveValue(2);
  });

  test('btn Adicionar Despesas renderizada na tela', () => {
    renderWithRouterAndRedux(<WalletForm currencies={ mockData } />);

    const btnAdd = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(btnAdd).toBeInTheDocument();
    expect(btnAdd).toBeEnabled();
  });
});
