import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { infoUserSave } from '../redux/actions';
import validateDisabledButton from '../suport/check';

class Login extends React.Component {
  state = {
    isButtonDisabled: true,
    password: '',
    email: '',
  };

  handleSubmit = () => {
    const { history, dispatch } = this.props;
    dispatch(infoUserSave({ ...this.state }));
    history.push('/carteira');
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.setState((prevState) => ({
          isButtonDisabled: validateDisabledButton(prevState),
        }));
      },
    );
  };

  render() {
    const { isButtonDisabled, email, password } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail
            <input
              data-testid="email-input"
              placeholder="Insira o e-mail"
              type="text"
              id="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="password">
            Senha
            <input
              data-testid="password-input"
              placeholder="Insira a senha"
              type="password"
              id="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>

          <button
            onClick={ this.handleSubmit }
            disabled={ isButtonDisabled }
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default connect()(Login);
