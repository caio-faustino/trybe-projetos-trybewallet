import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  methods = ['Cartão de crédito', 'Cartão de débito', 'Dinheiro'];

  tags = ['Transporte', 'Alimentação', 'Saúde', 'Lazer', 'Trabalho'];

  state = {
    method: this.methods[0],
    tag: this.tags[0],
    description: '',
    valueInput: 0,
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
    const { method, tag, description, valueInput, currency } = this.state;
    return (
      <form>
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
            type="text"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            value={ valueInput }
            onChange={ this.handleChange }
            type="number"
            name="valueImput"
            id="value-input"
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
