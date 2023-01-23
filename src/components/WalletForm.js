import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletForm extends Component {
  methods = ['Cartão de débito', 'Dinheiro', 'Cartão de crédito'];

  tags = ['Transporte', 'Lazer', 'Alimentação', 'Trabalho', 'Saúde'];

  state = {
    valueInput: 0,
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

  render() {
    const { currencies } = this.props;
    const { method, tag, valueInput, currency, description } = this.state;
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
            name="valueInput"
            id="value-input"
            value={ valueInput }
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
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
