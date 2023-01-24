import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

const emailCheck = 'check@email.com';
const passwordCheck = '000000';

describe('Componente Login.js sendo testado', () => {
  test('box de e-mail renderizada na tela', () => {
    const boxEmail = screen.getByRole('textbox', { name: /e-mail/i });
    const { history } = renderWithRouterAndRedux(<App />);
    expect(boxEmail).toBeInTheDocument();
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('box de e-mail alterada conforme digita o conteudo', () => {
    const stateInitial = {
      user: {
        password: '',
        email: '',
      },
    };

    renderWithRouterAndRedux(<App />, { stateInitial });
    const boxEmail = screen.getByRole('textbox', { name: /e-mail/i });
    expect(boxEmail).toBeInTheDocument();
    userEvent.type(boxEmail, emailCheck);
    expect(boxEmail).toHaveValue(emailCheck);
  });

  test('box de senha renderizada na tela', () => {
    const boxPassword = screen.getByLabelText(/senha/i);
    const { history } = renderWithRouterAndRedux(<App />);
    expect(boxPassword).toBeInTheDocument();
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('box de senha alterada conforme digita o conteudo', () => {
    const stateInitial = {
      user: {
        password: '',
        email: '',
      },
    };

    renderWithRouterAndRedux(<App />, { stateInitial });
    const boxPassword = screen.getByLabelText(/senha/i);
    expect(boxPassword).toBeInTheDocument();
    userEvent.type(boxPassword, passwordCheck);
    expect(boxPassword).toHaveValue(passwordCheck);
  });

  test('Botão disabled sem validacao correta', () => {
    const stateInitial = {
      user: {
        password: '',
        email: '',
      },
    };

    renderWithRouterAndRedux(<App />, { stateInitial });
    const boxPassword = screen.getByLabelText(/senha/i);
    const boxEmail = screen.getByRole('textbox', { name: /e-mail/i });
    const btnLogin = screen.getByRole('button', { name: /entrar/i });

    expect(boxPassword).toBeInTheDocument();
    expect(boxEmail).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
    expect(btnLogin).toBeDisabled();

    userEvent.type(boxEmail, emailCheck);
    userEvent.type(boxPassword, '00000');

    expect(btnLogin).toBeDisabled();
  });

  test('Botão not_disabled com validacao correta', () => {
    const stateInitial = {
      user: {
        password: '',
        email: '',
      },
    };

    const { history } = renderWithRouterAndRedux(<App />, { stateInitial });
    const boxPassword = screen.getByLabelText(/senha/i);
    const boxEmail = screen.getByRole('textbox', { name: /e-mail/i });
    const btnLogin = screen.getByRole('button', { name: /entrar/i });

    expect(boxPassword).toBeInTheDocument();
    expect(boxEmail).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
    expect(btnLogin).toBeDisabled();

    userEvent.type(boxEmail, emailCheck);
    userEvent.type(boxPassword, passwordCheck);
    expect(boxPassword).toHaveValue(passwordCheck);
    expect(boxEmail).toHaveValue(emailCheck);
    expect(btnLogin).not.toBeDisabled();

    userEvent.click(btnLogin);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
