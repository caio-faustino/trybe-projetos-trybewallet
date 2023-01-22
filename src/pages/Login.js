import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      block: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => { this.checkPassword(); });
  };

  checkPassword = () => {
    const { email, password } = this.state;
    const limit = 6;
    const checkEmail = /[^@ \n]+@[^@ \n]+\.[^@ \n]/;
    if (checkEmail.test(email) && password.length >= limit) {
      this.setState({ block: false });
    } else { this.setState({ block: true }); }
  };

  handleClick = (event) => {
    event.preventDefault();
    const { loginChange, history } = this.props;
    const { email } = this.state;
    loginChange(email);
    history.push('/carteira');
  };

  render() {
    const { email, password, block } = this.state;
    return (
      <form onSubmit={ this.handleClick }>
        <input
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
          name="e-mail"
          type="email"
        />
        <input
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
          name="password"
          type="password"
        />
        <button
          type="submit"
          disabled={ block }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  loginChange: PropTypes.string }.isRequired;

const mapDispatchToProps = (dispatch) => ({
  loginChange: (email) => dispatch(loginUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);
