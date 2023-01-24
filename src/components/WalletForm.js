import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { walletInfoSave } from '../redux/actions';

class WalletForm extends Component {
  methods = ['Cartão de débito', 'Dinheiro', 'Cartão de crédito'];

  tags = ['Transporte', 'Lazer', 'Alimentação', 'Trabalho', 'Saúde'];

  state = {
    value: 0,
    method: this.methods[0],
    tag: this.tags[0],
    description: '',
    currency: 'USD',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async () => {
    const { dispatch } = this.props;
    const requestCurrencies = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesList = await requestCurrencies.json();
    dispatch(walletInfoSave(this.state, currenciesList));
    this.setState({
      value: '',
      description: '',
    });
  };

  render() {
    const { currencies } = this.props;
    const { method, tag, value, currency, description } = this.state;
    return (
      <form>
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            onChange={ this.handleChange }
            type="text"
            name="description"
            id="description"
            value={ description }
          />
        </label>
        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            onChange={ this.handleChange }
            type="number"
            name="value"
            id="value-input"
            value={ value }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            onChange={ this.handleChange }
            name="currency"
            id="currency"
            value={ currency }
          >
            {currencies.map((option) => (
              <option key={ option }>{option}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            data-testid="method-input"
            onChange={ this.handleChange }
            name="method"
            id="method"
            value={ method }
          >
            {this.methods.map((option, index) => (
              <option key={ index }>{option}</option>
            ))}
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select
            data-testid="tag-input"
            onChange={ this.handleChange }
            name="tag"
            id="tag"
            value={ tag }
          >
            {this.tags.map((option, index) => (
              <option key={ index } value={ option }>
                {option}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={ this.handleSubmit }>Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
