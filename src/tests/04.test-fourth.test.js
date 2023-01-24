import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockInput from './helpers/mockInput';
import mockData from './helpers/mockData';

describe('Componente Table.js sendo testado', () => {
  test('listEmpty return listEmpty', () => {
    const listEmpty = [];
    const stateInitial = {
      wallet: {
        expenses: listEmpty,
        currencies: Object.keys(mockData),
      },
    };

    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], stateInitial });
    const index = screen.getByRole('cell', { name: /não existem despesas para exibir\./i });
    expect(index).toBeInTheDocument();
  });

  test('listEmpty dont return listEmpty', () => {
    const stateInitial = {
      wallet: {
        expenses: mockInput,
        currencies: Object.keys(mockData),
      },
    };

    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], stateInitial });
    const index = screen.queryByRole('cell', { name: /não existem despesas para exibir\./i });
    expect(index).not.toBeInTheDocument();
  });

  test('Renderizar Header da tabela', () => {
    const stateInitial = {
      wallet: {
        expenses: mockInput,
        currencies: Object.keys(mockData),
      },
    };

    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], stateInitial });
    const index = screen.getByRole('columnheader', { name: /descrição/i });
    expect(index).toBeInTheDocument();
  });

  test('Exibir btns', () => {
    const initialState = {
      wallet: {
        expenses: mockInput,
        currencies: Object.keys(mockData),
      },
    };

    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], initialState });
    const btnEdit = screen.getAllByRole('button', { name: /editar/i });
    const btnDel = screen.getAllByRole('button', { name: /excluir/i });
    btnEdit.forEach((edButton) => expect(edButton).toBeInTheDocument());
    btnDel.forEach((delButton) => expect(delButton).toBeInTheDocument());
  });
});
